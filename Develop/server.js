const express = require("express");
const path = require("path");
const fs = require("fs");
const backRoutes = require("./routes/backroutes");
const frontRoutes = require("./routes/frontroutes");

const app = express();
const PORT = 3000;

const tables = [];

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use('/api', backRoutes)
app.use('/api', frontRoutes)



// =============================================================

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});