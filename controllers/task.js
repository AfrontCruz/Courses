var express = require('express');
const database = require('../database/db');
var router = express.Router();


router.get("/task", (request, response) =>{
    let msg = ["hello world", "First"];
    new database();
    response.status(200).json( msg )
});

module.exports = router;
