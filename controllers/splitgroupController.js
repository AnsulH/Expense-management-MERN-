const splitModel = require('../models/splitgroupModel');
const moment = require('moment')

const getAllsplitTransection =async(req,res)=>{
    try {
        const {frequency,selectedDate,type }= req.body
        const splitModel = await splitModel.find({
            ...(frequency!=="custom" ? { 
                    date:{
                        $gt:moment().subtract(Number(frequency),'d').toDate()
                    },
                } : { 
                    date:{
                        $gte:selectedDate[0],
                        $lte:selectedDate[1]
                    },
                } ),
                userid: req.body.userid,
                ...(type!=='all' &&{type}) 
        }); ///s
        res.status(200).json(splitModel);
    } catch (error) {
        res.status(500).json(error)
    }
};


const addsplitTransection = async(req,res) => {
    try {
        const newsplitTransection = new splitModel(req.body);
        await newsplitTransection.save();
        res.status(201).send('Transection Created')
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
};


const editsplitTransection = async(req,res)=>{
    try {
        await splitModel.findOneAndUpdate({_id:req.body.splittransactionId}, req.body.payload);
        res.status(200).send("Edited Successfully")
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
};


const deletesplitTransection = async(req,res)=>{
    try {
        await splitModel.findOneAndDelete({ _id:req.body.splittransactionId})
        res.status(200).send("Deleted Succesfully")
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = {getAllsplitTransection,addsplitTransection,editsplitTransection,deletesplitTransection};
