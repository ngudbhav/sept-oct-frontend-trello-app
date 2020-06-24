const express = require('express');
const router = express.Router();
const listController = require('../../controllers/listController');

/* GET home page. */
router.post('/create', listController.create);

//router.get('/find', listController.find);

module.exports = router;
