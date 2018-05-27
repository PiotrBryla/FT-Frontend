# FT-Frontend
This is my implmentation of recruitment task given by Financial Times.
The project is using free [Financial Times Headline Licence Service API](https://developer.ft.com/portal/docs-start-here) to show list of articles headlines retrived by passing searching query to the api.

## Technology Stack
- [Node.JS](https://nodejs.org) and [Express](https://expressjs.com/) are used for the backend side.
- Application is using  [Pug](https://pugjs.org/api/getting-started.html) templating engine.
-  Front end is based on [Origami](http://origami.ft.com/)  framework.

## Used Search Queries

Table below shows query strings passed to the API in order to obtain headlines list for each of pages:


|     Page       |Query String |
|----------------|-------------------------------|
|`'/home'`|`'news'`|
|`'/world'`|`'world'`|
|`'/uk'`|`'United+Kingdom'`|
|`'/companies'`|`'Companies'`|
|`'/markets'`|`'markets'`|
|`'/opinion'`|`'opinion'`|
|`'/workandcareers'`|`'work+careers'`|
|`'/lifeandarts'`|`'life+arts'`|
|`'/fastft'`|`'fastft'`|
|`'/marketsdata'`|`'marketsdata'`|

## Installation
1. Clone this repository.
2. Set yoour working directory to the `FT-Frontend` (`cd ./FT-Frontend`)  and run `npm install`.
3. In `line` 4  of `api.js` file past your [Financial Times Headline Licence Service API KEY](https://developer.ft.com/portal/docs-start-here) for example : `const API_KEY = "1234567XXXXXXXXXXXX";`
4. Run `node index` - your server will be running on `localhost:8081`
