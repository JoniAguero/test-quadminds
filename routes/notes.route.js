"use strict"

var express = require('express');

var NoteController = require('../controllers/notes.controller');
var auth = require('../middlewares/auth');
var admin = require('../middlewares/admin');

var noteRoute = express.Router();

noteRoute.post('/note', [auth, admin], NoteController.CreateNote);
noteRoute.get('/notes', NoteController.GetNotes);

module.exports = noteRoute;
