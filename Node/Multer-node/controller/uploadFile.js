const dotenv = require('dotenv');
const upload = require('./uploadMiddleware');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');



dotenv.config();

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


function uploadFile(req, res) {
    upload.single('image'), async (req, res) => {
        try {
            const result = await cloudinary.uploader.upload(req.file.path);
            res.status(200).json({
                message: 'Image uploaded',
                localPath: `/assets/${req.file.filename}`,
                cloudinaryUrl: result.secure_url,
            });
        } catch (err) {
            res.status(500).json({ error: 'Upload failed' });
        }

    }
}