import Post from '../model/post.js'
import { auth } from './auth.js'

const createPost = (req, res) => {
    auth(req,res)
    const newPost = new Post(req.body)

    newPost.save().then((post) => {
        res.status(201).json({"status":201,"data":post})
    }).catch((err) => {
        res.status(204).json(err)
    })
}

const getPost = (req, res) => {
    auth(req,res)
    Post.find(req.query).then((data) => {
        if(data.length) return res.status(200).json(data)
        return res.status(204).json({"status":204,"message":"Post not found"})
    }).catch((err) => {
        return res.status(400).send(err)
    })
}

const updatePost = (req, res) => {
    auth(req,res)
    Post.findOneAndUpdate({_id:req.params.id}, req.body).then((data) => {
        if(data){
            Post.findById(req.params.id).then((newData) => {
                return res.status(200).json({"status":200,"data":newData})
            })
        } else{
            return res.status(204).json({"status":204,"message":"Post not found"})
        }
    }).catch((err) => {
        res.status(400).json(err)
    })
}

const deletePost = (req, res) => {
    auth(req,res)
    Post.findByIdAndDelete(req.body.id).then((data) => {
        if (data) return res.status(200).json({"status":200,"message":"Post deleted!"})
        return res.status(204).json({"status":204,"message":"Post not found"})
    }).catch((err) => {
        res.status(400).json(err)
    })
}

export {createPost, getPost, updatePost, deletePost}