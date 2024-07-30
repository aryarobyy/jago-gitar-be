import {Router} from 'express'
import {createFollow, getFollow, deleteFollow} from '../controller/followController.js'

const followRouter = Router();
// Follow
followRouter.post('/', createFollow)
followRouter.get('/', getFollow)
followRouter.delete('/', deleteFollow)

export default followRouter

/*
+ POST 
- url: /follow
- data: user_id (req), follow (req)

+ GET
- url: /follow
- data: id OR user_id

+ DEL
- url: /follow
- data: id
*/