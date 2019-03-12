const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    title: {
        required: true,
        type: String,
        maxlength: 100
    },
    content: {
        required: true,
        type: String,
        maxlength: 100
    }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = {
    Note
}