# Bookish
## Fullstack website for Book recommendation
This is the source code for Bookish, divided into two services, server and client.  
The server is an Express.js app which uses the Google Books API to get information about books, and stores user preferences in a MongoDB database (to be implemented later).  
The client is a React app that is set up independently from the server, and uses the server's REST API to get relevant information.

## How to set up for development:

### Using GNU make:
- Make sure you have Node.js *(>=v18.12.1)* and npm *(>=v8.19.2)* set up on your system.
- Run `make install` in the root directory.

### Using NPM:
- Make sure you have Node.js *(>=v18.12.1)* and npm *(>=v8.19.2)* set up on your system.
- In the root directory, run `npm install`.
- Run `npm install` separately in both, the `client` and `server` directories.

## How to run:

### Using NPM for development:
- If you have GNU make on your system, run `make run`.
- Otherwise, run `npm run dev`.

### Using Docker for production:
- Make sure you have Docker *(>=v20.10.23)* and Docker Compose *(>=v2.15.1)* installed on your system.
- Run `docker compose up`.
- To rebuild cached containers, run `docker compose up --build`.

### Using NPM for production:
- If you don't have `serve` installed, run `npm install -g serve`.
- In the client directory, run `npm run build` to build optimized production build of the app.
- To have the client up and listening at port 3000, in the client directory run `serve -s build -l 3000`.
- To set up the server, in the server directory, run `npm run start`.