const express = require('express');
const { home, csvUplode } = require('../controller/homeController');
const router = express.Router();
const upload = require('../middleware/multer');

// home page route
router.route('/').get(home)
//upload page rote and multer middleware
router.route('/upload').post(upload.single('file'),csvUplode)


module.exports = router;