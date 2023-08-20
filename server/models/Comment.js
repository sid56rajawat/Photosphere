/* 

*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    /* commentid ? */
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comment_text: {
        type: String,
        required: true
    },
    /* likes */
    likes: {
        type: Integer,
        default: 0
    },
    /* timestamp */
    created_at: {
        type: Date,
        default: Date.now
    },
    isReply: {
        type: boolean,
        default: false
    },
    replies:
    {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('Comment', commentSchema);
