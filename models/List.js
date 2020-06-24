const mongoose = require('mongoose');

const list = new mongoose.Schema(
    {
        board_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Board'},
        name: String
    }
);

module.exports = mongoose.model('List', list);