const express = require('express')
const {getAllTransection,addTransection,editTransection,deleteTransection} = require('../controllers/transectionController');

//router object
const router = express.Router()

//routes
//add transection POST Model
router.post("/add-transection", addTransection);

//get all transection POST Model
router.post("/get-transection", getAllTransection);

//edit transection route
router.post("/edit-transection", editTransection);

//delete transection
router.post("/delete-transection", deleteTransection);


module.exports = router;