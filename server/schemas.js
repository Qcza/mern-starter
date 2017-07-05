'use strict';
const mongoose = require('mongoose');

const textSchema = mongoose.Schema({
    text: String
});

exports.textSchema = textSchema;