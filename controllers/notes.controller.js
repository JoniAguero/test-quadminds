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
    Note.find({},(err, notes)=>{
      if(err) return res.status(400).send(err);
        res.status(200).send(notes)
    })
}

const UpdateNote= (req, res) => {
    Note.findOneAndUpdate({
            name: 'Note'
        }, {
            "$set": {
                noteInfo: req.body
            }
        }, {
            new: true
        },
        (err, doc) => {
            if (err) return res.json({
                success: false,
                err
            });
            return res.status(200).send({
                success: true,
                noteInfo: doc.noteInfo
            })
        }
    )
}

module.exports = {
    CreateNote,
    GetNotes,
    UpdateNote
}
