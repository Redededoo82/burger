var express = require('express');
var burger = require('../models/burger');
var router = express.Router();

//Create routes and logic
router.get('/', function(req, res){
    burger.selectAll(function(data){
        var hdbrsObj = {
            burgers: data
        };
        console.log(hdbrsObj);
        res.render('index', hdbrsObj);
    });
});



module.exports = router;