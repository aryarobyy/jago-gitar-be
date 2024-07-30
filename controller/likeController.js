import Like from "../model/like.js"
import { auth } from "./auth.js"

const createLike = (req, res) => {
    auth(req,res)
    const newLike = new Like(req.body)

    newLike.save().then((like) => {
        res.status(201).json({"status":201,"data":like})
    }).catch((err) => {
        res.status(400).json(err)
    })
}

const getLike = (req, res) => {
    auth(req,res)
    Like.find(req.query).then((data) => {
        if(data.length) return res.status(200).json(data)
        return res.status(204).json({"status":204,"message":"like not found"})
    }).catch((err) => {
        return res.status(400).send(err)
    })
}

const deleteLike = (req, res) => {
    auth(req,res)
    Like.deleteMany(req.body).then((data) => {
        if (data.deletedCount) return res.status(200).json({"status":200,"message":"Like deleted!"})
        return res.status(204).json({"status":204,"message":"Like not found"})
    }).catch((err) => {
        res.status(400).json(err)
    })
}

export {createLike, getLike, deleteLike}