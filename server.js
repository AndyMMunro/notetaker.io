var express = require("express");

const {
    v4: uuidv4
} = require('uuid');
uuidv4();

// var apiRoutes = require("./routes/apiroutes");
// var htmlRoutes = require("./routes/htmlroutes");

var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

// app.use(express.static(__dirname + "/develop/public/assets"));
app.use(express.static("develop/public"));




require("./develop/routes/apiroutes")(app);
require("./develop/routes/htmlroutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});