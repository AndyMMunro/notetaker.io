var path = require("path");

module.exports = function (app) {
    router.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });


    router.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

};