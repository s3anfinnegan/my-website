# Deploying React App to GitHub Pages (as project page) with a custom domain name
## Pre-reqs/ Assumptions
- Have a Github repo initialised for the react app
- VSCode as code editor (preferable)
- Own a custom domain (optional)

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
- Allow time for deployment process to take place, changes will not be immediately visible

## Add a custom domain
- Go to the DNS records manager (I used Hosting Ireland for my domain)
- Add A records for the apex domain (<custom-domain>.com) - the IPv4 record values are as follows. Remove any addditional A Record(s) for the apex domain or else Github's DNS check will fail and a TLS certificate will not issued to acheive HTTPS  <br />
`185.199.108.153` `185.199.109.153` `185.199.110.153` `185.199.111.153`
- Add a CNAME record for the www subdomain - the record value will be `<github-username>.github.io`. Add a CNAME file to the root of your folder with your custom domain "www.<my-domain>.com"
- Wait for the DNS record changes to propagate, this can take 24 hours but you can adjust the TTL setting within your DNS manager. You can verify the DNS records using https://www.whatsmydns.net/
- Add the custom domain to the Pages section of the repo settings. The DNS check should be successful
- Enforce HTTPS. This may not be an option for a little while as it takes time for Github to generate the SSL certificate
- Edit package.json file to "homepage": "https://<custom-domain>.com"`. Then run predeploy and deploy scripts. Allow for changes to take effect
- Go to `https://www.<custom-domain>.com"` to see webpage live at custom domain (github subdomain will redirect to this domain now)

## Troubleshooting
- Cert not issued/ Can't enforce HTTPS? Ensure CNAME and A records are set up correctly and allow time for propagation (TTL)
- Made changes to deployed site but now its not available at my custom domain? Check repo settings and ensure the custom domain hasn't been removed during changes
