To get started please fork and clone this repo. You must have postgreSQL as your backend.

Fork and clone this repo and navigate into the folder in the back-end.

Run npm i in the terminal.

Run the following commands:

The first command is npm run dbinit which will initialize your database
The second command is npm run dbseed which will populate or seed your database

Create a .env file for the backend

In the .env file write the following:
PORT=8888
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=bakery_items
PG_USER=postgres

Then you can npm start to run the back end.

After the back-end is up and running, open a new terminal and go into front-end.

Create a .env file for the frontend.

In the .env file write the following:
REACT_APP_API_URL=http://localhost:8888

While you are in the front end run npm i

After that you can npm start to start the front end.