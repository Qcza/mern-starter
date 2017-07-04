const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve('./app')));

app.get('/', (req, res)=>{
    res.sendFile(path.resolve('./app/index.html'));
});

app.listen(3000, ()=>{
    console.log('listetning on 3000');
});