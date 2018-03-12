const request = require('request');

// FT API Key
const API_KEY = "";

exports.searchApi= function(queryString, callback){

    var data;

    let query = {
        "queryString": queryString,
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
        // console.log(response.body.results[0].results[0]);
        if (!error && response.statusCode === 200) {
            callback(null, response.body);
        } else {
            callback(error);
        }
    });
};
