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

        console.log(tempObj);
        let data = fs.readFileSync("develop/data/db.json", 'utf8');
        let data_parsed = JSON.parse(data);
        // console.log(data_parsed);
        data_parsed.notes.push(tempObj);
        fs.writeFileSync("develop/data/db.json", JSON.stringify(data_parse));

    });

};