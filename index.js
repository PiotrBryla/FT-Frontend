// Import necessary modules
const express = require('express');
const path = require('path');
const request = require('request');

// Initialize application
const app = express();

// FT API Key
const API_KEY = "";

// Set view engine
app.set ('view engine', 'pug') ;

// Set the static files directories
app.use('/assets', express.static(__dirname + '/assets'));

// Set views repositories
app.set('views', [
    path.join(__dirname, 'views')
]);

// Home API Call
app.get('/' ,function(req, res){

    let query = {
        "queryString": "Weather",
        "resultContext" : {
		 "aspects" :[  "title","lifecycle","location","summary","editorial" ]
	    }
    };

    request({
        url: "http://api.ft.com/content/search/v1",
        method: "POST",
        json: true,
        headers: { "X-Api-Key": API_KEY, "Content-Type": "application/json"},
        body: query
    }, function (error, response, reqBody){
        // Get title of article
        // response.body.results[0].results[0].title.title
        console.log(response.body.results[0].results[0]);
    });


    res.render('index');
});

// Set application port
app.listen(3000);
