const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('./config/db/index');

const indexRouter = require('./config/routes/index');
const listRouter = require('./config/routes/list');
const taskRouter = require('./config/routes/task');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/list/', listRouter);
app.use('/task/', taskRouter);

let port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running at port: ${port}`)
});
