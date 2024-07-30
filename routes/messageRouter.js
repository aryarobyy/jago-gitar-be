import {Router} from 'express'
import {createMessage, getMessage, deleteMessage} from '../controller/messageController.js'

const messageRouter = Router();
// Message
messageRouter.post('/', createMessage)
messageRouter.get('/', getMessage)
messageRouter.delete('/', deleteMessage)

export default messageRouter

/*
+ POST 
- url: /message
- data: user_id (req), message (req)

+ GET
- url: /message
- data: user_id OR id

+ DEL
- url: /message
- data: id
*/