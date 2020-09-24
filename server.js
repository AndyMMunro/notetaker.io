var express = require("express");

// var apiRoutes = require("./routes/apiroutes");
// var htmlRoutes = require("./routes/htmlroutes");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

require("./develop/routes/apiroutes")(app);
require("./develop/routes/htmlroutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});