import {Router} from 'express'
import {createLike, getLike, deleteLike} from '../controller/likeController.js'

const likeRouter = Router();
// Follow
likeRouter.post('/', createLike)
likeRouter.get('/', getLike)
likeRouter.delete('/', deleteLike)

export default likeRouter

/*
+ POST 
- url: /like
- data: user_id (req), post_id (req)

+ GET
- url: /like
- data: id OR user_id OR post_id

+ DEL
- url: /like
- data: id
*/