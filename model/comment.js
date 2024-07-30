import mongoose from 'mongoose'

const Comment = mongoose.model('comment', {
    user_id: {type: mongoose.ObjectId, required: true},
    post_id: {type: mongoose.ObjectId, required: true},
    text: {type: String, required: true},
    createdAt: {type: String, default: Date.now},
    updatedAt: {type: String, default: Date.now}
})

export default Comment