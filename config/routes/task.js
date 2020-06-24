const express = require('express');
const router = express.Router();
const taskController = require('../../controllers/taskController');

router.post('/create', taskController.create);

module.exports = router;