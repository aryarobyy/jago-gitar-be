import {Router} from 'express'
import {createCourse, getCourse, updateCourse, deleteCourse} from '../controller/courseController.js'

const courseRouter = Router();

// Post
courseRouter.post('/', createCourse)
courseRouter.get('/', getCourse)
courseRouter.delete('/', deleteCourse)
courseRouter.patch('/:id', updateCourse)

export default courseRouter

/*
+ POST 
- url: /course
- data: user_id (req), text (req), prev (req), next (req)

+ GET
- url: /course
- data: user_id OR id 

+ PATCH
- url: /course/:id
- data: text OR img OR prev OR next

+ DEL
- url: /course
- data: id 
*/