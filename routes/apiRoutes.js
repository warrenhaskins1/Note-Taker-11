const router = require('express').Router();
const store = require('../db/savedNotes');

// requesting the existing notes

router.get('/notes', (req, res) => {
    console.log(req.body)
    store
        .getNotes()
        .then(notes => {
            res.json(notes)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

// posting note function route 

router.post('/notes', (req, res) => {
    console.log(req.body)
    store
        .addNote(req.body)
        .then(note => {
            res.json(note)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


module.exports = router;
