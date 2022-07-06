const mongoose = require('mongoose');

const gifSchema = new mongoose.Schema(
    {
       // _id: String,
        name: String,
        url: String,
        category:String
});

module.exports = mongoose.model('Gif', gifSchema);
