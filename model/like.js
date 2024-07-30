import mongoose from 'mongoose'

const Like = mongoose.model('like', {
    user_id: {type: mongoose.ObjectId, required: true},
    post_id: {type: mongoose.ObjectId, required: true},
    createdAt: {type: String, default: Date.now}
})

export default Like