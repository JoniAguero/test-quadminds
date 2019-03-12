"use strict"

var express = require('express');

var NoteController = require('../controllers/notes.controller');
// var auth = require('../middlewares/auth');
// var admin = require('../middlewares/admin');

var noteRoute = express.Router();

noteRoute.post('/note', NoteController.CreateNote);
// brandRoute.post('/product/brand', [auth, admin], BrandController.CreateBrand);
noteRoute.get('/notes', NoteController.GetNotes);

module.exports = noteRoute;
