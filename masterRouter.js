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
        itemName: req.body.itemName
    });

    masterPurchaseItemModelQuery.save().then(() => {
        res.json({ msg: 'masterPurchaseItemModelQuery executed' });
    }).catch((e) => {
        res.json(e);
    })
});

router.post('/masterPurchaseItemEdit', (req, res) => {
    console.log('req-------', req.body);
    let { itemName } = req.body;
    let { id } = req.body;

    masterPurchaseItemModel.findOneAndUpdate(
        {
            _id: id
        },
        {
            $set: { itemName }
        }
    ).then(() => {
        res.json({ msg: 'masterPurchaseItemModelQuery updated' });
    }).catch((e) => {
        res.json(e);
    });
});

router.get('/masterPurchaseItemView', (req, res) => {
    masterPurchaseItemModel.find().then((responseData) => {
        res.json({ data: responseData });
    }).catch((e) => {
        res.json(e);
    });
});

router.post('/masterPurchaseItemDelete', (req, res) => {
    console.log('req-------', req.body);
    let { id } = req.body;

    masterPurchaseItemModel.findOneAndDelete(
        {
            _id: id
        }
    ).then(() => {
        res.json({ msg: 'masterPurchaseItemModelQuery deleted' });
    }).catch((e) => {
        res.json(e);
    });
});

module.exports = router;