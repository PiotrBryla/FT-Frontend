const express = require('express');
const router = express.Router();
const api = require('../api');

router.get('/', function(req,res){

    api.searchApi("work+careers", function(err, data) {
        if (err) return error;
        res.render('workandcareers', {data: data.results[0].results})
    });
});


module.exports = router
