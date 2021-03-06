const express = require('express');
const mysql = require('mysql');
const PORT = process.env.PORT || 3050;
const app = express();
const tasks = require('./controllers/task');

app.use( express.json() );
app.use( tasks );

app.listen(PORT, () => console.log("Server running"))