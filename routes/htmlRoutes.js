const router = require("express").Router();
const path = require("path");

//this get path returns the notes.html file
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//this get path will return the index.html for any route other than "/notes"
router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
