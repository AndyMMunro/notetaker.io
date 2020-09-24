const noteData = require("../data/db.json");

module.exports = function (app) {

    app.post("/api/notes", function (req, res) {

        noteData.push(req.body);

    });

    app.get("/api/tables", function (req, res) {
        res.json(tableData);
    });
};