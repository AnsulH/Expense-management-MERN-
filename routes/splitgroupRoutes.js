const express = require('express')
const {getAllsplitTransection,addsplitTransection,editsplitTransection,deletesplitTransection} = require('../controllers/splitgroupController');

//router object
const router = express.Router()

//routes
//add transection POST Model
router.post("/add-split-transection", addsplitTransection);

//get all transection POST Model
router.post("/get-split-transection", getAllsplitTransection);

//edit transection route
router.post("/edit-split-transection", editsplitTransection);

//delete transection
router.post("/delete-split-transection", deletesplitTransection);


module.exports = router;