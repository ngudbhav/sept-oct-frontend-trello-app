const express = require('express');
const router = express.Router();
const boardController = require('../../controllers/boardController');

/* GET home page. */
router.post('/create', boardController.create);

router.get('/find', boardController.find);

module.exports = router;
