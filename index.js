const express = require("express");
const app = express();

const PORT = 4000;

function handleListening() {
    console.log('Listening on: http://localhost:${PORT}');
    console.log('${PORT}');
}

app.listen(PORT, handleListening);