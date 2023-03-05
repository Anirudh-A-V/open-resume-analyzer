# Resume Analyzer Frontend
This is the frontend interface of the Resume Analyzer.

## Getting Started
### Prerequisites
Node.js version 14 or higher

### Installing
Clone this repository:
````bash
git clone https://github.com/your-username/vite-react-app.git
cd vite-react-app
````

### Install dependencies:
```` bash
npm install
````

### Running the Development Server
```` bash
npm run dev
````
This will start the development server and open the app in your default browser.

### Building for Production
```` bash
npm run build
````
This will create a production build of the app in the dist directory.

### Running the Production Build
```` bash
npm run serve
````
This will start a server and serve the production build of the app.

### Contributing
We welcome contributions to this project! To contribute, please follow these steps:

1. Fork this repository
2. Create a branch: git checkout -b your-branch-name
3. Make your changes and commit them: git commit -am 'Add some feature'
4. Push to the branch: git push origin your-branch-name
5. Create a pull request
6. Setting Environment Variables. You can set environment variables by creating a .env file in the root directory of the project. Here's an example .env file:

````makefile
VITE_APP_API_KEY=your-api-key
````
You can access the environment variable in your code like this:

```` javascript
const apiKey = import.meta.env.VITE_APP_API_KEY;
````

## Deploying
There are many ways to deploy a Vite React app, but here's one way:

1. Create a production build: `npm run build`
2. Upload the contents of the dist directory to your web server
3. Done!

## License
This project is licensed under the MIT License - see the [LICENSE](../main/LICENSE) file for details.
