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
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilepicture: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    isprivate: {
        type: Boolean,
        default: true
    },
    posts: {
        type: Array,
        default: []
    },
    saved: {
        type: Array,
        default: []
    },
    tagged_posts: {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('User', userSchema);