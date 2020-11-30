let listController = {};
const List = require('../models/List');
const mongoose = require('mongoose');

listController.create = (req, res, next) => {
    if (req.body.boardId && req.body.name) {
        List.create(
            {
                board_id: new mongoose.mongo.ObjectId(req.body.boardId),
                name: req.body.name
            }, (error, result) => {
                if (error) throw error;
                res.json(result);
            }
        );
    }
    else {
        res.sendStatus(422);
    }
};

module.exports = listController;