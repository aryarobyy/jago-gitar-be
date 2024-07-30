import Follow from "../model/follow.js"
import { auth } from "./auth.js"

const createFollow = (req, res) => {
    auth(req,res)
    const newFollow = new Follow(req.body)

    newFollow.save().then((follow) => {
        res.status(201).json({"status":201,"data":follow})
    }).catch((err) => {
        res.status(400).json(err)
    })
}

const getFollow = (req, res) => {
    auth(req,res)
    Follow.find(req.query).then((data) => {
        if(data.length) return res.status(200).json(data)
        return res.status(204).json({"status":204,"message":"follow not found"})
    }).catch((err) => {
        return res.status(400).send(err)
    })
}

const deleteFollow = (req, res) => {
    auth(req,res)
    Follow.deleteMany(req.body).then((data) => {
        if (data.deletedCount) return res.status(200).json({"status":200,"message":"Follow deleted!"})
        return res.status(204).json({"status":204,"message":"Follow not found"})
    }).catch((err) => {
        res.status(400).json(err)
    })
}

export {createFollow, getFollow, deleteFollow}