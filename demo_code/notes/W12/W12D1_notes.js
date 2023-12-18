/*

Serving Static Files

To serve static files, we use another middleware built into a method on the express object
    app.use(express.static())

This middleware tells Express to look in the specified directory for files to send

We can make it so that we are only serving files from the css directory by changing the path in express.static to 'assets/css'

We can add a prefix, such as /styling, to the app.use to require that the request path starts with that in order to be served

*/