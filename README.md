![joao-ferrao-4YzrcDNcRVg-unsplash](https://user-images.githubusercontent.com/76550448/222956996-23111943-b8c2-44ca-864e-ec22a801f676.jpg)
# open-resume-analyser

A tool to filter resumes based on desirable qualities, skills, keywords and more.

## Problem
Considering the heap of applications a company receives for an open position, there is a need for a tool that can skim through hundreds of profiles and shortlist the ones with relevant qualities.  Those tools are still prone to contextual dilemmas and need highly complex code to solve. There are privacy issues when personal data is stored by the tool. We aim to solve this by using AI that seamlessly scans through all profiles and ranks relevant ones based on provided traits, let it be keywords, skills or qualities.

## Description

This is a complete web application that can be used to filter resumes and analyse them as per the parameters specified. It is built using Django and uses OpenAI's GPT-3 API to analyse your resume.
The frontend of the application is built using React. This is a privacy friendly application as it does not store any of your data. It is completely open source and you can use it for free.

## Project Timeline
**> What was the initial stage of the project ?** <br>
Developed from scratch.<br>

**> What stage is it in now?**<br>
Project hosted live with all basic functionalties implemented. <br>Link: http://open-resume-analyzer.vercel.app/<br>

**> How did you get there?**
### DAY1
<b>10:00 AM :</b> Project idea finalised.<br>
<b>4:30 PM :</b> Basic frontend and google cloud API set up completed.<br>
<b>10:30 PM :</b> Basic API ready for hosting.<br>

### DAY2
<b>01:00 AM :</b> Backend API live.<br>
<b>10:30 AM :</b> Frontend finalised.<br>
<b>3:30 PM :</b> Project hosted and live.<br>

**> What is working/not working?**<br>
Automated email to selected candidates is halfway implemented. 



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

