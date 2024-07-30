import mongoose from 'mongoose'

const User = mongoose.model('User', {
    name: {type:String,required: true},
    username: {type:String,required: true},
    email: {type:String,required: true},
    password: {type:String,required: true},
    photo: {type:String,required: true},
    bio: {type: String},
    isFrozen: {type: Boolean,default: false},
    createdAt: {type: String, default: Date.now}, 
    updatedAt: {type: String, default: Date.now}
})

export default User