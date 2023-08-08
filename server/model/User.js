const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: email,
        required: true
    },
    password: {
        type: password,
        required: true
    },
    refreshToken: String
});

module.exports = mongoose.model('User', userSchema);