const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author must have a name!"],
        minlength: [3, "Name must be at least 3 characters in length!"]
    },
}, {timestamps: true});

const Author = new mongoose.model('Author', AuthorSchema );
module.exports = Author;