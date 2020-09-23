const express = require("express");
const backRoutes = require("./routes/backroutes");
const frontRoutes = require("./routes/frontroutes");

const app = express();
var PORT = process.env.PORT || 8080;

const tables = [];

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use('/api', backRoutes);
app.use('/', frontRoutes);



// =============================================================

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});