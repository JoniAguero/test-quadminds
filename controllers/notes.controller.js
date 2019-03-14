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
    let type = req.query.type;
    let items = req.query.id;

    if(type === "array"){
        let ids = req.query.id.split(',');
        items = [];
        items = ids.map(item=>{
            return mongoose.Types.ObjectId(item)
        })
    }

    Note.
        find({ '_id':{$in:items}}).
        exec((err,docs)=>{
            return res.status(200).send(docs)
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
    GetNotesById,
    UpdateNote
}
