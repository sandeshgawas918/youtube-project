const { default: mongoose } = require("mongoose");
const DB_NAME=require('../constants.js')

const connectDB=async()=>{
    try {
        const connectedDB=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MONGO Database connected on :${process.env.MONGODB_URI}/${DB_NAME}`);
    } catch (error) {
        console.log('DB connection faileld : ', error);
    }
}

module.exports=connectDB