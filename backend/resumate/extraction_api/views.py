from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
import os
import openai
from django.http import JsonResponse
import fitz
import sys

import io
import os

from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from googleapiclient.http import MediaIoBaseDownload
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

class Downloader:

    def __init__(self):

        self.SCOPES = ['https://www.googleapis.com/auth/drive']
        print("\n\nDir-", os.listdir(), '\n')
        
        # Authenticate and build the Drive API client
        self.creds = None
        if os.path.exists('resumate-extraction-RESTapi/extraction_api/token.json'):
            self.creds = Credentials.from_authorized_user_file('resumate-extraction-RESTapi/extraction_api/token.json', self.SCOPES)

        if not self.creds or not self.creds.valid:
            if self.creds and self.creds.expired and self.creds.refresh_token:
                self.creds.refresh(Request())
            else:
                flow = InstalledAppFlow.from_client_secrets_file(
                    'resumate-extraction-RESTapi/extraction_api/credentials.json', self.SCOPES)
                self.creds = flow.run_local_server(port=0)
            # Save the credentials for the next run
            with open('token.json', 'w') as token:
                token.write(self.creds.to_json())

        self.service = build('drive', 'v3', credentials=self.creds)

    def export_pdf(self, real_file_id, name, loc):
        try:
            # create drive api client

            file_id = real_file_id

            # pylint: disable=maybe-no-member
            request = self.service.files().get_media(fileId=file_id)
            i=0

            filename = os.path.join(loc, name)

            file = io.FileIO(filename, 'wb')
            downloader = MediaIoBaseDownload(file, request)
            done = False
            while done is False:
                status, done = downloader.next_chunk()
                print(F'Download {int(status.progress() * 100)}.')

        except HttpError as error:
            print(F'An error occurred: {error}')
            file = None

    def download_now(self, filename, id):
        # Specify the path of the folder
        folder_path = '/Resume Drive/Resume Drive'

        # Split the path into individual folder names
        folder_names = folder_path.strip('/').split('/')

        # Initialize variables
        folder_id = 'root'
        found = False

        try:
            # Replace the values with your credentials and folder ID
            folder_id = id
            FOLDER_ID = folder_id

            results = self.service.files().list(
                q=f"'{FOLDER_ID}' in parents and trashed = false", fields="nextPageToken, files(id, name)").execute()
            items = results.get('files', [])

            if not items:
                print('No files found in the folder.')
            else:
                print('Files:')
                for item in items:
                    print(f'{item["name"]} ({item["id"]})')
                    self.export_pdf(item["id"], item["name"], filename)


        except HttpError as e:
            print(e)


# Create your views here.
@api_view(['POST'])
def postText(request):

    api_key = ''
    with open(os.path.join('resumate', 'extraction_api'), "r") as f:
        api_key = f.read()

    filename = 'resumate-extraction-RESTapi/extraction_api/Resume_temp'
    id = request.data.get("url")
    p = request.data.get("prompt")

    dict = {'url': id, 'prompt': p}
    d = Downloader()
    d.download_now(filename,id)

    files = []
    for item in os.listdir(filename):
        files.append(os.path.join(filename, item))

    infos = {}

    for x, file in enumerate(files):
        doc = fitz.open(file)


        for page in doc:
            txt = page.get_text().encode("utf-8") + bytes((12,))

        openai.api_key = api_key
        start_sequence = "\nA:"
        restart_sequence = "\n\nQ: "

        response = openai.Completion.create(
        model= "text-davinci-003",
        prompt=f"Consider the following text enclosed within double quotes: \"{txt}\".This is the resume of a person applying for a job. Please see from the resume if the following conditions are met:\n{p}\nNow return a json file for the each of the above requirements with key as the question number and value as True or False depending on the query with the person's email id and name also in the json file.",
        max_tokens= 1000,
        temperature= 0,
        top_p= 1,
        n= 1,
        stream= False,
        logprobs= None,
        stop= "{}"
        )
        infos[x] = response.choices[0].text
        
    for file in files:
        os.remove(file)
        
    return JsonResponse(infos)


@api_view(['GET'])
def getText(request):
    return Response('Get request successfull')
