/* 
postSchema structure:
post_id, user_id, caption, image_url, created_at
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    uploader_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    caption: {
        type: String
    },
    image_url: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Array,
        default: []
    },
    comments: {
        type: Array,
        default: []
    },
    /* stores user_id */
    tagged_users: {
        type: Array,
        default:[]
    }
});

module.exports = mongoose.model('Post', postSchema);
