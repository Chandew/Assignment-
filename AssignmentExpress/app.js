const express = require('express');

const app = express();
const port = 5678;
const hostname = 'localhost';

const router = require('./Router/index');

app.use('/', router);


app.listen(port,hostname,() => {
    console.log(`Server is running at ${hostname}:${port}`);

});