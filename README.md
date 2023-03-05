# open-resume-analyser

A tool to filter resumes based on keywords.

## Description

This is a complete web application that can be used to filter resumes and analyse them as per the parameters specified. It is built using Django and uses openai's GPT-3 to analyse your resume.
The frontend of the application is built using React. This is a privacy friendly application as it does not store any of your data. It is completely open source and you can use it for free.

## How to contribute

1. Clone the repository and leave a star 😉
2. Create a new folder named `secrets` in the root directory of the repository.
3. Now create a new cloud app on Google cloud console and enable the Google Drive API ([Refer here](https://developers.google.com/drive/api/v3/quickstart/python)) and download the credentials.json file and place it in the secrets folder.
4. Create a virtual environment in the backend folder & handle the backend dependencies using `pip install -r requirements.txt`
5. Now run the server using `python manage.py runserver`
6. Handle the frontend dependencies using `npm install`
7. Create a `.env` file in the root directory of the frontend folder and add the following line `VITE_APP_API_URL=http://127.0.0.1:5000` and save it.
8. Now run the frontend using `npm run dev`
9. Now you can start contributing to the project.

## How to use

1. Go to the home page and click on the `Login with Google` button.
2. Now you will be redirected to the dashboard page.
3. Paste the link to the folder containing the resumes in the input field and Then select the parameters you want to analyse your resume on.
4. Then click on the `Submit` button.
5. The application will start to filter the resumes based on the parameters you have selected.

### Contributors

<a href="https://github.com/Anirudh-A-V/open-resume-analyzer/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Anirudh-A-V/open-resume-analyzer" />
</a>

