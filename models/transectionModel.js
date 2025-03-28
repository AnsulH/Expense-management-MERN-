const mongoose = require('mongoose');

const transectionSchema = new mongoose.Schema(
    {
        userid:{
            type:String,
            required:true,
        },
        amount:{
            type:Number,
            required:[true,'Amount is required']
        },
        type:{
            type:String,
            required:[true,'Enter Type']
        },
        description:{
            type:String,
            required:[true,'Description is required']
        },
        date:{
            type:Date,
            required:[true,'Date is required']
        }
    },
    {timestaps:true}
); 

const transectionModel = mongoose.model('transections', transectionSchema)
module.exports = transectionModel ;