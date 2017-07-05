'use strict';
const express = require('express');
const path = require('path');
const assert = require('assert');
const Promise = require('bluebird');
const app = express();
const mongoose = require('mongoose');
const model = require('./model');

mongoose.connect('mongodb://localhost/test', {
    useMongoClient: true
});
mongoose.Promise = Promise;

//models
const Text = model.Text;

//queries
const textsQuery = Text.find({});
assert.equal(textsQuery.exec().constructor, Promise);

const seedHelloWorld = () => {
    textsQuery.exec().then((res)=>{
        if (res.length < 1) {
            const helloworld = new Text({text: 'Hello World!'});
            helloworld.save((err)=>{
                if (err) console.log(err);
            });
        }
    }).catch((err)=>console.log(err));
};
seedHelloWorld();

app.use(express.static(path.resolve('./app')));

app.get('/', (req, res)=>{
    res.sendFile(path.resolve('./app/index.html'));
});

app.get('/texts', (req, res)=>{
   textsQuery.exec().then((data)=>{
       res.json(data);
   }).catch((err)=>console.log(err))
});

app.listen(3000, ()=>{
    console.log('listetning on 3000');
});