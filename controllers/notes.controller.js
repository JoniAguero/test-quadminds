"use strict"
const { Note } = require('../models/note.model');

const CreateNote = (req, res) => {
    const note = new Note(req.body);

    note.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            note: doc
        })
    })
}

const GetNotes = (req, res) => {
    note.find({},(err, notes)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(notes)
    })
}

module.exports = {
    CreateNote,
    GetNotes
}
