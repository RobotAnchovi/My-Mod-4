const express = require('express');
const app = express();

app.use(express.json());

app.get(['/test', '/status'], (req, res) => {
    res.send('Hello from your first express API!')
});

app.post('/create', (req, res) => {
    console.log(req.body)
    res.json(req.body)
});




app.listen(8000, () => console.log('Listening on port 8000...'));