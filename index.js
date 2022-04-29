const express = require("express");
const nunjucks = require("nunjucks")
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('Assets'))

const scryfallController = require("./Controllers/scryfallApiController");

nunjucks.configure('Views', {
    autoescape: true,
    express: app
});

app.get('/', function(req, res) {
    res.render('index.html');
});

app.use("/api/scryfall",scryfallController)

app.listen(3030,() => {console.log("Server stared on port 3030")})
