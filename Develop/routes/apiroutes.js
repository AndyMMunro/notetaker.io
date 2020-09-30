const notes = require("../data/db.json");
const fs = require("fs");
const {
    v4: uuidv4
} = require('uuid');
uuidv4();

module.exports = function (app) {

    // get notes to be displayed 

    app.get("/api/notes", function (req, res) {
        let notes = fs.readFileSync("develop/data/db.json", "utf-8");
        notes = JSON.parse(notes);
        res.json(notes);
    })

    // saves notes to the server 

    app.post("/api/notes", function (req, res) {
        req.body
        let tempObj = {
            id: uuidv4(),
            title: req.body.title,
            text: req.body.text
        };
        // console.log(notes);
        let notes = fs.readFileSync("develop/data/db.json", "utf-8");
        notes = JSON.parse(notes);
        notes.push(tempObj);
        fs.writeFileSync("develop/data/db.json", JSON.stringify(notes));
        res.json(notes);
    });

    app.delete('/api/notes/:id', function (req, res) {
        let notesId = req.params.id;
        let notes = fs.readFileSync("develop/data/db.json", "utf-8");
        notes = JSON.parse(notes)
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id === notesId) {
                notes.splice(i, 1);
                break;
            }
            console.log("note deleted");
        };
        fs.writeFile(
            "develop/data/db.json",
            JSON.stringify(notes),
            "utf8",
            (err) => {
                if (err) throw err;
                res.send("Deleted Note");
            }
        );
    });
};