const mongoose = require('mongoose');

const schools = new mongoose.Schema({
    schoolList:{
        type: [String],
        required: true,
        unique: true
    },
});

const Schools = mongoose.model('Schools',schools);
module.exports = Schools;