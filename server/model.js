'use strict';
const mongoose = require('mongoose');
const schemas = require('./schemas');


const Text = mongoose.model('Text', schemas.textSchema);

exports.Text = Text;