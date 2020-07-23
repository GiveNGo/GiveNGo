"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    karma: {
        type: Number,
        required: true
    },
    tasks: [
        {
            type: mongoose.Types.ObjectId,
            require: true,
            ref: 'Task'
        }
    ]
});
// const User = mongoose.model('User', userSchema);
module.exports = mongoose.model('User', userSchema);
;
