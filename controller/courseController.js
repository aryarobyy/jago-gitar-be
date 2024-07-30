import Course from '../model/course.js'
import { auth } from './auth.js'

const createCourse = (req, res) => {
    auth(req,res)
    const newCourse = new Course(req.body)

    newCourse.save().then((course) => {
        res.status(201).json({"status":201,"data":course})
    }).catch((err) => {
        res.status(204).json(err)
    })
}

const getCourse = (req, res) => {
    auth(req,res)
    Course.find(req.query).then((data) => {
        if(data.length) return res.status(200).json(data)
        return res.status(204).json({"status":204,"message":"Course not found"})
    }).catch((err) => {
        return res.status(400).send(err)
    })
}

const updateCourse = (req, res) => {
    auth(req,res)
    Course.findOneAndUpdate({_id:req.params.id}, req.body).then((data) => {
        if(data){
            Course.findById(req.params.id).then((newData) => {
                return res.status(200).json({"status":200,"data":newData})
            })
        } else{
            return res.status(204).json({"status":204,"message":"Course not found"})
        }
    }).catch((err) => {
        res.status(400).json(err)
    })
}

const deleteCourse = (req, res) => {
    auth(req,res)
    Course.findByIdAndDelete(req.body.id).then((data) => {
        if (data) return res.status(200).json({"status":200,"message":"Course deleted!"})
        return res.status(204).json({"status":204,"message":"Course not found"})
    }).catch((err) => {
        res.status(400).json(err)
    })
}

export {createCourse, getCourse, updateCourse, deleteCourse}