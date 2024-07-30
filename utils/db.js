import mongoose from 'mongoose'
import 'dotenv/config'

export const connectMongo = () => {       
    mongoose.connect(process.env.MONGODB)
}

export const disconnectMongo = () =>{
    mongoose.connection.close()
}
