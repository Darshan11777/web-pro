
import express from 'express'
import image_middleware from '../middleware/image.middleware.js'
const router = express.Router();
router.route('/upload').post(image_middleware, (req, res) => {
    let profileImagePath=''
    // Check if the file is uploaded
    if (req.files['image'] && req.files['image'][0]) {
        profileImagePath = req.files['image'][0].path;
    }
    console.log(profileImagePath)

    if (!profileImagePath) {
        return res.status(400).json({ message: 'No file uploaded.' });
    }

    // Send back the uploaded file path or other relevant data
    res.status(200).json({
        message: 'Profile image updated successfully.',
        imgUrl: profileImagePath, // Return the file path of the uploaded image
    });
})

export default router;