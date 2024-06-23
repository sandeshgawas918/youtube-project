const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        index: true,
        trim: true,
        // unique: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        // unique: true
    },
    fullName: {
        type: String,
        // required: true,
    },
    avatar: {
        type: String,
        // required:true,
    },
    coverImage: {
        type: String,
        // required:true,
    },
    password: {
        type: String,
        // required: true,
    },
    refreshToken: {
        type: String,
        // required: true,
    },
    watchHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    }]
}, { timestamps: true })

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
        next()
    }
    else {
        return next()
    }
})

userSchema.methods.isPasswordCorrect = async function () {
    return await bcrypt.compare(password, this.password)
}

const User = mongoose.model('User', userSchema)

module.exports = User