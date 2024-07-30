import mongoose from 'mongoose'

const Follow = mongoose.model('follow', {
    user_id: {type: mongoose.ObjectId, required: true},
    following: {type: mongoose.ObjectId, required: true},
    createdAt: {type: String, default: Date.now}
})

export default Follow