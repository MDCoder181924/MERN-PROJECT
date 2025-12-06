const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    video:{
        type: String,
        reqiured: true
    },
    description:{
        type:String
    },
    foodPatner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'foodPartner',
    }
});

const foodModel = mongoose.model("food", foodSchema);

module.exports = foodModel;

