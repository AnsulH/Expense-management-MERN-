const mongoose = require('mongoose')

const splitModel= new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Enter Name!!!"],
        },
        amount:{
            type:Number,
            required:[true,"Enter Amount!!!"],
        },
        date:{
            type:Date,
            required:[true,'Date is required']
        }
    }
);

module.exports= mongoose.model('splitModel',splitModel);