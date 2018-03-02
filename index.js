// Import necessary modules
const express = require('express');
const path = require('path');

// Initialize application
const app = express();

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
    res.render('index');
});

// Set application port
app.listen(3000);
