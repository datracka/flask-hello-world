# Hello word app

intent of having

- Flask app
- GraphQL Endpoint
- React ecosystem (babel, webpack and so on)
- deployable in Heroku out of the box

Dependencies:

- python3 (currently 3.7.2)
- pipenv (https://thoughtbot.com/blog/how-to-manage-your-python-projects-with-pipenv)
  
Run locally:

- clone app
- install dependencies `"$ pipenv install"`
- run `"$ yarn server"` to run server under `http://localhost:5000`
- run `"$ yarn watch"` to update bundle when something changes (manual browser update Ctrl+R required to ask flask server new content though - pending to improve the workflow)


Deploy app in Heroku

- run `"$ yarn build"`
- commit all to github repo
- run deploy from heroku from selected branch (usually master)
