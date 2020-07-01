const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        board_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Board', required: true},
        user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
    }
);

module.exports = mongoose.model('board_user', schema);