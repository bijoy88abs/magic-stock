const express = require("express");

const mongoose = require("mongoose");
const router = express.Router();


// let schema = mongoose.Schema;
// let testSchema = new schema({
//     item: String
// });
// let Test = mongoose.model('purchase', testSchema);

router.get('/purchaseList', (req, res) => {
    res.send('test');
    // let test = new Test({
    //     item: '1234'
    // });

    // test.save().then(() => {
    //     res.send('purchase list route');

    // }).catch((e) => {

    //     res.send(e);
    // })
})

module.exports = router;