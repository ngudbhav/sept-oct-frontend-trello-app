let boardController = {};
const Board = require('../models/Board');
const BoardUser = require('../models/BoardUser');

boardController.test = (req, res, next) => {
    res.json('success');
};

boardController.create = (req, res, next) => {
    if (req.body.boardName) {
        Board.create(
            {
                name: req.body.boardName
            }, (error, result) => {
                if (error) throw error;
                else{
                    BoardUser.create(
                        {
                            board_id: result._id,
                            user_id: req.body.user_id
                        }, (error, results) => {
                            res.json(results);
                        }
                    );
                }
        });
    }
    else {
        throw new Error('Board name is required');
    }
};

boardController.find = (req, res, next) => {
    Board.aggregate(
        [
            {
                $lookup: {
                    from: 'lists',
                    localField: '_id',
                    foreignField: 'board_id',
                    as: 'lists'
                }
            },
            {
                $lookup: {
                    from: 'tasks',
                    localField: 'id',
                    foreignField: 'lists.list_id',
                    as: 'tasks'
                }
            },
            {
                $project: {
                    "board_name": "$name",
                    "list_ids": "$lists._id",
                    "list_name": "$lists.name",
                    "list_tasks": "$tasks"
                }
            }
        ]
    ).exec((error, results) => {
        if (error) throw error;
        res.json(results);
    });
};

module.exports = boardController;