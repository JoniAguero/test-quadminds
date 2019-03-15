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

const GetNotesById = (req, res) => {

    let item = req.query.id;

    Note.
        find({ '_id':{$in:item}}).
        exec((err,docs)=>{
            return res.status(200).send(docs)
    })
}

const UpdateNote= (req, res) => {
    let item = req.query.id;
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

const RemoveNote = (req, res) => {
    console.log('remove');
    let item = req.query.id;
    console.log(item);    
    Note.findByIdAndRemove(item,
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
    GetNotesById,
    UpdateNote,
    RemoveNote
}
