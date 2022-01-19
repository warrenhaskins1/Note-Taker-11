// const router = require("express").Router();
// const store = require("../db/store");

// //Get the pre-existing notes/parse json for res
// router.get("/notes", (req, res) => {
//     store
//     .getNotes()
//     .then(notes => {
//         res.json(notes)
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
// });

// //Post route
// router.post("/notes", (req, res) => {
//     store
//     .addNote(req.body)
//     .then(note => {
//         res.json(note)
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
// });

// module.exports = router;
const router = require('express').Router();

const store = require('../db/savedNotes');

// requesting the existing notes

router.get('/notes', (req, res) => {
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


// delete note function route

router.delete('/notes/', (req, res) => {
    store
        .removeNote(req.params)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err))
})

module.exports = router;