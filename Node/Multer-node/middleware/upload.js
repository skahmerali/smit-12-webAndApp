const multer = require('multer');
const path = require('path');

// Store image in assets folder
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // unique name
    },
});



const upload = multer({ storage });

module.exports = upload;

