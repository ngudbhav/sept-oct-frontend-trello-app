const taskController = {};
const Task = require('../models/Task');
const mongoose = require('mongoose');

taskController.create = (req, res, next) => {
    if (req.body.listId && req.body.name && req.body.dueDate) {
        Task.create(
            {
                list_id: new mongoose.Types.ObjectId(req.body.listId),
                name: req.body.name,
                dueDate: new Date(req.body.dueDate),
            }, (error, result) => {
                if (error) throw error;
                else{
                    res.json(result);
                }
            }
        );
    } else {
        res.sendStatus(422);
    }
};

module.exports = taskController;