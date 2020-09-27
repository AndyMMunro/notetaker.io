const notes = require("../data/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
uuidv4();

module.exports = function (app) {

    // get notes to be displayed 

    app.get("/api/notes", function (req, res) {
        res.json(notes)
    })

    // saves notes to the server 

    app.post("/api/notes", function (req, res) {
        let tempObj = {
            id: uuidv4(),
            title: req.body.title,
            text: req.body.text
        };
        notes.push(tempObj);
        console.log(notes);
        res.json(notes);
    });

};