const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send('<h2>Hi there guysss!</h2>')
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('server is running')
})