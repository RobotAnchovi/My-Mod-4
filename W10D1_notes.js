/*

Frontend
    UI/UX, dealing with visuals, fetching (requests), requesting data from server
    Develop Requests, Handle Responses

Backend
    Server sending data to the client, DB - data storage/handling, efficiency, routing, security
    Handle Requests, Develop Responses

What is an API?
    Tool for delivering data, creating a way for a user to interact with DB

What is a Framework?
    Structure/blueprint around which we build something else

What is Express?
    API Framework
    A backend is just a framework or skeleton that a project or site is built around

Steps to start with Express
    Initialize node
        npm init -y
    Install packages
        Express - npm install express
        Nodemon - npm install -D nodemon
    Create an app.js file - Main hub of your application
        Import express
        Use express to instantiate app object
        Listen to a port (start the server)

Next we need to add out start scripts to package.json
    "start": "node app.js"
    "dev": "nodemon app.js"


Route Handlers
    App object methods:
        get, post, put/patch, delete, all, use
    Request path option:
        string, array of strings, regular expression, array of RegEx, array of strings and RegEx
    Middleware
        Series of callback functions
    Response Methods:
        send (used for plain text and JSON)
            Will be almost exclusively used for sending plain text
        json (always sends JSON)
            sets the headers and formatting for us

        -------------

        render
        redirect

app.<method>(<path>, <middleware>, (request, response) => {
    response
})

In order to parse the request body, we have to use the express.json middleware
    app.use(express.json())

!! Express works top => down !!

*/
