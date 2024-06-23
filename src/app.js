const express = require('express')
const app = express()
const cookieParser=require('cookie-parser')
const cors=require('cors')

app.use(cors({
    origin:process.env.CORS_ORIGIN
}))
app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

//routes import

const userRouter=require('./route/user.route.js')


//routes declaration
app.use('/api/v1/users',userRouter)

app.get('/', (req, res) => res.send('Hello World!, my first MERN stack app is running live'))

module.exports=app