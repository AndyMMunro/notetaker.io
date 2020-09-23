const router = require("express").Router();

router.post("/notes", function (req, res) {
    // console.log(req.body)
    let noteObj = {
        tile: req.body.noteTile,
        text: req.body.text
    };

    let data = fs.readFileSync('notes.json', 'utf8');
    data_parsed = JSON.parse(data);
    // console.log(data_parsed)
    data_parsed.notes.push(temp_obj);
    // console.log(data_parsed)
    fs.writeFileSync('/notes.json', JSON.stringify(data_parsed));
});

module.exports = router