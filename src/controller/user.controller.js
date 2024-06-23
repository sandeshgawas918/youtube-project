const User = require('../model/user.js')
const uploadOnCloudinary = require('../utils/cloudinary.js')

const registeredUser = async (req, res) => {
    // res.status(200).json({message:"successfull-first route message"})

    //get user details from frontend
    //validation
    //check if user already exist
    //check for images
    //upload to cloudinary

    const { fullname, email, username, password } = req.body
    console.log('email : ', email);

    if (fullname == '') {
        throw new Error('fullname not present')
    }
    if (email == '') {
        throw new Error('email not present')
    }
    if (username == '') {
        throw new Error('username not present')
    }
    if (password == '') {
        throw new Error('password not present')
    }

    const existedUser = await User.findOne({ username })

    if (existedUser) {
        throw new Error('username already exist')
    }

    const avatarLocalPath = req.files?.avatar[0]?.path
    const coverImageLocalPath = req.files?.coverImage[0]?.path

    const avatarUpload = await uploadOnCloudinary(avatarLocalPath)
    const coverImageUpload = await uploadOnCloudinary(coverImageLocalPath)

    const createdUser = await User.create({
        username,
        fullname,
        password,
        email,
        avatar: avatarUpload?.url || '',
        coverImage: coverImageUpload?.url | ''
    })

    const createdUserCheck = User.findById(createdUser._id)

    if(!createdUserCheck){
        throw new Error('User not created...')
    }

    return res.status(201).json({createdUserCheck})

}

module.exports = registeredUser