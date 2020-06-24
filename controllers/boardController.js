let boardController = {};
const Board = require('../models/Board');

boardController.test = (req, res, next) => {
    res.json('success');
};

boardController.create = (req, res, next) => {
    if (req.body.boardName) {
        Board.create(
            {
                name: req.body.boardName
            }, (error, result) => {
            res.json(result);
        });
    }
    else {
        throw new Error('Board name is required');
    }
};

boardController.find = (req, res, next) => {
    Board.find({}, (error, results) => {
        if (error) throw error;
        else{
            res.json(results);
        }
    });
};

module.exports = boardController;