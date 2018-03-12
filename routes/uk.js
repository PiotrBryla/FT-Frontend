const express = require('express');
const router = express.Router();
const api = require('../api');

router.get('/', function(req,res){

    api.searchApi("United+Kingdom", function(err, data) {
        if (err) return error;
        res.render('uk',{data: data.results[0].results})
    });
});

module.exports = router
