require('dotenv').config()
const mongoose=require('mongoose')

const connectDB=require('./db/index.js')
const app=require('./app.js')
const port = process.env.PORT || 3000

connectDB().then(()=>{
    app.listen(port, () => console.log(`http://localhost:${port}`))
}).catch((err)=>{
    console.log(err);
})

