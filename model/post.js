import mongoose from 'mongoose'

const Post = mongoose.model('Post', {
    user_id: {type: mongoose.ObjectId, required: true},
    text: {type: String, required: true},
    img: {type: String, default: null},
    createdAt: {type: String, default: Date.now}, 
    updatedAt: {type: String, default: Date.now}
})

export default Post