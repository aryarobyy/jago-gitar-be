import Comment from '../model/comment.js'
import { auth } from './auth.js'

const createComment = (req, res) => {
    auth(req,res)
    const newComment = new Comment(req.body)

    newComment.save().then((comment) => {
        res.status(201).json({"status":201,"data":comment})
    }).catch((err) => {
        res.status(204).json(err)
    })
}

const getComment = (req, res) => {
    auth(req,res)
    Comment.find(req.query).then((data) => {
        if(data.length) return res.status(200).json(data)
        return res.status(204).json({"status":204,"message":"Comment not found"})
    }).catch((err) => {
        return res.status(400).send(err)
    })
}

const updateComment = (req, res) => {
    auth(req,res)
    Comment.findOneAndUpdate({_id:req.params.id}, req.body).then((data) => {
        if(data){
            Comment.findById(req.params.id).then((newData) => {
                return res.status(200).json({"status":200,"data":newData})
            })
        } else{
            return res.status(204).json({"status":204,"message":"Comment not found"})
        }
    }).catch((err) => {
        res.status(400).json(err)
    })
}

const deleteComment = (req, res) => {
    auth(req,res)
    Comment.findByIdAndDelete(req.body.id).then((data) => {
        if (data) return res.status(200).json({"status":200,"message":"Comment deleted!"})
        return res.status(204).json({"status":204,"message":"Comment not found"})
    }).catch((err) => {
        res.status(400).json(err)
    })
}

export {createComment, getComment, updateComment, deleteComment}