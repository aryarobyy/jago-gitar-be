import mongoose from 'mongoose'

const Message = mongoose.model('message', {
    user_id: {type: mongoose.ObjectId, required: true},
    to: {type: mongoose.ObjectId, required: true},
    message: {type: String, required: true},
    createdAt: {type: String, default: Date.now}
})

export default Message