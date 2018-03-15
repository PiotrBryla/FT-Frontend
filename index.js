// Import necessary modules
const express = require('express');
const path = require('path');
const request = require('request');
const api = require('./api');

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
    res.redirect('/home');
});


// Routing
let home = require('./routes/home');
let companies = require('./routes/companies');
let lifeandarts = require('./routes/lifeandarts');
let markets = require('./routes/markets');
let opinion = require('./routes/opinion');
let search = require('./routes/search');
let uk = require('./routes/uk');
let workandcareers = require('./routes/workandcareers');
let world = require('./routes/world');

let fastft = require('./routes/fastft');
let marketsdata = require('./routes/marketsdata');

app.use('/home', home);
app.use('/companies', companies);
app.use('/lifeandarts', lifeandarts);
app.use('/markets', markets);
app.use('/opinion', opinion);
app.use('/search', search);
app.use('/uk', uk);
app.use('/workandcareers', workandcareers);
app.use('/world', world);

app.use('/fastft', fastft);
app.use('/marketsdata', marketsdata);

// Set application port
app.listen(8081);
