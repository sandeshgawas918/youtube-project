const fs = require('fs')

const cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: 'sample',
  api_key: '874837483274837',
  api_secret: 'a676b67565c6767a6767d6767f676fe1'
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    console.log('hii, this is try block');
    if (!localFilePath) return null
    console.log('hii, this is try block inside if condition');
    const result = await cloudinary.v2.uploader.upload(localFilePath, { resource_type: "auto" })
    console.log('file uploaded successfully!!! ', result);
    return result
  } catch (error) {
    fs.unlinkSync(localFilePath)
    console.log('sandesh gawas error');
  }
}

module.exports = uploadOnCloudinary