const path = require('path')
const multer = require('multer');

// Set up multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads'); // Specify the destination directory for uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname+ Date.now()+path.extname(file.originalname)); // Use the original file name
    },
});
const upload = multer({ storage: storage });

module.exports = upload;