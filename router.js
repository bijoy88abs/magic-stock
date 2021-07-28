const express = require("express");

const mongoose = require("mongoose");
const router = express.Router();


let schema = mongoose.Schema;
let testSchema = new schema({
    item: String
});
let Test = mongoose.model('purchase', testSchema);

router.get('/purchaseList', (req, res) => {
    let test = new Test({
        item: '1234'
    });

    test.save().then(() => {
        res.send('purchase list route');

    }).catch((e) => {

    })
})

module.exports = router;