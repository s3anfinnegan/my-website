# Deploying React App to GitHub Pages (as project page)
## Pre-reqs/ Assumptions
- Have a Github repo initialised for the react app
- VSCode as code editor (preferable)

## React app setup with GH pages
`npx create-react-app <app-name>` (this will generate a boilerplate react app, customise as desired) <br />
`cd <app-name>` <br />
`npm install gh-pages --save-dev` (will allow to publish to GH Pages)

## Configuration
Open package.json and add the following: <br />
`"homepage": "https://<github-username>.github.io/<repo-name>"` at the very top of the package.json file (this is where the webpage will be hosted) <br />
and add the following to the scripts: <br />
`"predeploy": "npm run build",` (needed for creating the deployment package) <br /> 
`"deploy": "gh-pages -d build",` (needed for deploying/ publishing)

## Deployment 
- Stage, commit and push changes to main branch (not necessary but should) 
- Run `npm run build` or `npm run predeploy`
- Run `npm run deploy` -> the console should say "Published" after it is finished
- Verify deployment by going to the Github repo -> Repo settings -> Pages. There should be information about the latest deployment 
- Go to `https://<github-username>.github.io/<repo-name>` to see the webpage live
