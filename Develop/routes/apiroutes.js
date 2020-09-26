const notes = require("../data/db.json");
const fs = require("fs");

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(notes)
    })

    app.post("/api/notes", function (req, res) {
        let tempObj = {
            title: req.body.title,
            text: req.body.text
        };
        notes.push(tempObj);
        console.log(notes);
        res.json(notes);
    });

};