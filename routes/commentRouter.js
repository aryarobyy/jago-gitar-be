import {Router} from 'express'
import {createComment, getComment, updateComment, deleteComment} from '../controller/commentController.js'

const commentRouter = Router();

// Comment
commentRouter.post('/', createComment)
commentRouter.get('/', getComment)
commentRouter.delete('/', deleteComment)
commentRouter.patch('/:id', updateComment)

export default commentRouter

/*
+ POST 
- url: /comment
- data: user_id (req), post_id (req), text (req)

+ GET
- url: /comment
- data: id OR post_id 

+ PATCH
- url: /comment/:id
- data: text 

+ DEL
- url: /comment
- data: id 
*/