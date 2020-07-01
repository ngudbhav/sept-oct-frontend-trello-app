const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        "name": String,
        "password": String,
        boards: [{type: mongoose.Schema.Types.ObjectId}]
    }
);

module.exports = mongoose.model('user', schema);