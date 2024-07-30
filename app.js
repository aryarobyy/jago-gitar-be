import express from 'express'
import userRouter from "./routes/userRouter.js"
import postRouter from "./routes/postRouter.js"
import messageRouter from "./routes/messageRouter.js"
import followRouter from './routes/followRouter.js'
import commentRouter from './routes/commentRouter.js'
import likeRouter from './routes/likeRouter.js'
import courseRouter from './routes/courseRouter.js'
import cors from 'cors'
import { createServer } from 'http'
import { connectMongo } from './utils/db.js'

connectMongo()

const app = express()
const server = createServer(app)
const port = 5000

// Define the CORS options
const corsOptions = {
  credentials: true,
  origin: '*' // Whitelist the domains you want to allow
};

app.use(cors(corsOptions)) 
app.use(express.json());
app.get('/', (req,res) => {res.send("Hello World!")})
app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/message', messageRouter);
app.use('/comment', commentRouter);
app.use('/follow', followRouter);
app.use('/like', likeRouter);
app.use('/course', courseRouter);


server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})