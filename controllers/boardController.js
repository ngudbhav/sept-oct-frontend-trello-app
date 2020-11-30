let boardController = {};
const Board = require('../models/Board');

boardController.create = (req, res, next) => {
    if (req.body.boardName) {
        Board.create(
            {
                name: req.body.boardName
            }, (error, result) => {
                if (error) throw error;
                else{
                    res.json(result);
                }
        });
    }
    else {
        res.sendStatus(422);
    }
};

boardController.listBoards = (req, res, next) => {
    Board.find({}, (error, results) => {
        if (error) throw error;
        res.json(results);
    });
};

boardController.find = (req, res, next) => {

    if (req.params.boardId) {
        Board.findById(req.params.boardId, (error, results) => {
            if (error) throw error;
            else {
                res.json(results);
            } 
        });
    } else {
        res.sendStatus(422);
    }
};

module.exports = boardController;