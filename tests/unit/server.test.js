const express = require('express');
const server = require('../../server/server');
const mongoose = require('mongoose');
const model = require('../../server/model');
const seedHelloWorld = server.seedHelloWorld;

mongoose.connect('mongodb://localhost/testing', {
    useMongoClient: true
});

beforeAll(() => {
    server.checkQuery(server.textsQuery);
    const Text = new model.Text;
    Text.remove({});
});

test('seed Hello World!', () => {
    seedHelloWorld();
    server.textsQuery.exec().then(res=>{
        expect(res.length).toBe(1);
        expect(res[0].text).toEqual('Hello World!');
    })
});