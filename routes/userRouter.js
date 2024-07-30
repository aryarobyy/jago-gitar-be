import {Router} from 'express'
import {createUser, getUser, updateUser, deleteUser} from '../controller/userController.js'

const userRouter = Router();

// User
userRouter.post('/', createUser)
userRouter.get('/', getUser)
userRouter.delete('/', deleteUser)
userRouter.patch('/:id', updateUser)

export default userRouter

/*
+ POST 
- url: /user
- data: name (req), username (req), email (req), password (req), photo (req) 

+ GET
- url: /user
- data: id 

+ PATCH
- url: /user/:id
- data: name OR username OR password OR photo OR bio OR isFrozen

+ DEL
- url: /user
- data: id 
*/