const mongoose = require('mongoose')
const aggregatePaginate=require('mongoose-aggregate-paginate-v2')

const videoSchema = new mongoose.Schema({
    videoFile:{
        type:String,
        reuired:true
    },
    thumbnail:{
        type:String,
        reuired:true
    },
    title:{
        type:String,
        reuired:true
    },
    description:{
        type:String,
        reuired:true
    },
    duration:{
        type:Number,
        reuired:true
    },
    views:{
        type:Number,
        default:0
        // reuired:true
    },
    isPublished:{
        type:Boolean,
        reuired:true,
        default:false
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
},{timestamps:true})

videoSchema.plugin(aggregatePaginate)
const Video=mongoose.model('Video',videoSchema)

module.exports=Video