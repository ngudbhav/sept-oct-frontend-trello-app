const express = require('express');
const router = express.Router();
const boardController = require('../../controllers/boardController');

/* GET home page. */
router.post('/create', boardController.create);

router.get('/list', boardController.listBoards);

router.get('/find/:boardId', boardController.find);

module.exports = router;
