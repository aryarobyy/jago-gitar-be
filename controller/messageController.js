import Message from "../model/message.js"
import { auth } from "./auth.js"

const createMessage = (req, res) => {
    auth(req,res)
    const newMessage = new Message(req.body)

    newMessage.save().then((msg) => {
        res.status(201).json({"status":201,"data":msg})
    }).catch((err) => {
        res.status(400).json(err)
    })
}

const getMessage = (req, res) => {
    auth(req,res)
    Message.find(req.query).then((data) => {
        if(data.length) return res.status(200).json(data)
        return res.status(204).json({"status":204,"message":"Message not found"})
    }).catch((err) => {
        return res.status(400).send(err)
    })
}

const deleteMessage = (req, res) => {
    auth(req,res)
    Message.deleteMany(req.body).then((data) => {
        if (data.deletedCount) return res.status(200).json({"status":200,"message":"Message deleted!"})
        return res.status(204).json({"status":204,"message":"Message not found"})
    }).catch((err) => {
        res.status(400).json(err)
    })
}

export {createMessage, getMessage, deleteMessage}