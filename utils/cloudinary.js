import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadImageCloudinary =async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'books-mern',
        use_filename: true
    }) 
}
const deleteImageCloudinary =async (publicId) => {
    return await cloudinary.uploader.destroy(publicId)
}

export { uploadImageCloudinary, deleteImageCloudinary }