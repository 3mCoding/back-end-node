const express = require('express');
const app = express();

const userRouter = require('./router/user');
const questionRouter = require('./router/question');
app.use('/user', userRouter);
app.use('/question', questionRouter);

app.get('/', function(req, res){
    res.send('3분 코딩');
})

const path = require('path');
app.use('/description', express.static(path.join(__dirname, '/desc')));

app.listen(3000, () => console.log('3000번 포트 대기'));