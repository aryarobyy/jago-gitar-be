import {Router} from 'express'
import {createPost, getPost, updatePost, deletePost} from '../controller/postController.js'

const postRouter = Router();

// Post
postRouter.post('/', createPost)
postRouter.get('/', getPost)
postRouter.delete('/', deletePost)
postRouter.patch('/:id', updatePost)

export default postRouter

/*
+ POST 
- url: /post
- data: user_id (req), text (req)

+ GET
- url: /post
- data: user_id OR id

+ PATCH
- url: /post/:id
- data: text OR img

+ DEL
- url: /post
- data: id 
*/