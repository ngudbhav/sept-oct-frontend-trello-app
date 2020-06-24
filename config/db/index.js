const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');

mongoose.connection.on('connected', () => {
    console.log('Connection Successful');
});

mongoose.connection.on('error', error => {
    throw new Error(`Database connection Error\n${error}`);
});

module.exports = mongoose;