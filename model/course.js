import mongoose from 'mongoose'

const Course = mongoose.model('course', {
    user_id: {type: mongoose.ObjectId, required: true},
    text: {type: String, required: true},
    img: {type: String, default: null},
    createdAt: {type: String, default: Date.now}, 
    updatedAt: {type: String, default: Date.now},
    prev: {type: mongoose.ObjectId, required: true},
    next: {type: mongoose.ObjectId, required: true}
})

export default Course