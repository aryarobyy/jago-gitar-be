import User from '../model/user.js'
import { auth } from './auth.js'

const createUser = (req, res) => {
    auth(req,res)
    const newUser = new User(req.body)

    newUser.save().then((user) => {
        res.status(201).json({"status":201,"data":user})
    }).catch((err) => {
        res.status(204).json(err)
    })
}

const getUser = (req, res) => {
    auth(req,res)
    User.find(req.query).then((data) => {
        if(data.length) return res.status(200).json(data)
        return res.status(204).json({"status":204,"message":"User not found"})
    }).catch((err) => {
        return res.status(400).send(err)
    })
}

const updateUser = (req, res) => {
    auth(req,res)
    User.findOneAndUpdate({_id:req.params.id}, req.body).then((data) => {
        if(data){
            User.findById(req.params.id).then((newData) => {
                return res.status(200).json({"status":200,"data":newData})
            })
        } else{
            return res.status(204).json({"status":204,"message":"User not found"})
        }
    }).catch((err) => {
        res.status(400).json(err)
    })
}

const deleteUser = (req, res) => {
    auth(req,res)
    User.findByIdAndDelete(req.body.id).then((data) => {
        if (data) return res.status(200).json({"status":200,"message":"User deleted!"})
        return res.status(204).json({"status":204,"message":"User not found"})
    }).catch((err) => {
        res.status(400).json(err)
    })
}

export {createUser, getUser, updateUser, deleteUser}