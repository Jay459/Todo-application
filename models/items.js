const mongoose = require('mongoose');

const Item_Schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type: Number,
        required:true
    }
}, {timestamps:true});

const Item = mongoose.model('Item', Item_Schema);
module.exports = Item;