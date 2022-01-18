const router = require("express").Router();
const store = require("../db/store");

//Get the pre-existing notes/parse json for res
router.get("/notes", (req, res) => {
    store
    .getNotes()
    .then(notes => {
        res.json(notes)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

//Post route
router.post("/notes", (req, res) => {
    store
    .newNote(req.body)
    .then(note => {
        res.json(note)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

module.exports = router;