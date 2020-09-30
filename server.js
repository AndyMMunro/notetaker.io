var express = require("express");

const {
    v4: uuidv4
} = require('uuid');
uuidv4();

var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(express.static("Develop/public"));

require("./Develop/routes/apiroutes")(app);
require("./Develop/routes/htmlroutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});