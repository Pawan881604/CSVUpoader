const express = require('express');
const router = express.Router();
const { CSVCont } = require('../controller/csvcontroller');


//csv page route
router.route('/:id').get(CSVCont)



module.exports = router;