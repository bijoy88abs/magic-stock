const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

let schema = mongoose.Schema;


let masterPurchaseItemSchema = new schema({
    itemName: String
});
let masterPurchaseItemModel = mongoose.model('masterPurchaseItem', masterPurchaseItemSchema);

router.post('/masterPurchaseItemPost', (req, res) => {
    let masterPurchaseItemModelQuery = new masterPurchaseItemModel({
        itemName: req.data
    });

    masterPurchaseItemModelQuery.save().then(() => {
        res.json('masterPurchaseItemModelQuery executed');
    }).catch((e) => {
        res.json(e);
    })
});

router.post('/masterPurchaseItemView', (req, res) => {
   
});

router.post('/masterPurchaseItemDelete', (req, res) => {
   
});

module.exports = router;