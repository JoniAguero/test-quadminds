"use strict"

var express = require('express');

var NoteController = require('../controllers/notes.controller');
// var auth = require('../middlewares/auth');
// var admin = require('../middlewares/admin');

var noteRoute = express.Router();

noteRoute.get('/notes/all', NoteController.GetNotes);
noteRoute.get('/notes/by_id', NoteController.GetNotesById);
noteRoute.post('/notes/new', NoteController.CreateNote);
noteRoute.delete('/notes/remove', NoteController.RemoveNote);
noteRoute.put('/notes/update', NoteController.UpdateNote);

module.exports = noteRoute;
