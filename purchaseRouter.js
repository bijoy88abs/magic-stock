const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
let schema = mongoose.Schema;

let purchaseItemSchema = new schema({
    purchaseItemName: String,
    purchaseItemDate: String,
    purchaseItemColor: String,
    purchaseItemSize: String,
    purchaseItemMaterial: String,
    purchaseItemQty: String,
    purchaseItemPricePerUnit: String,
    purchaseItemGst: String,
    purchaseItemHsn: String,
    purchaseItemNote: String
});

let purchaseItemModel = mongoose.model('purchaseItem', purchaseItemSchema);

router.post('/purchaseItemPost', (req, res) => {
    let { purchaseItemName, purchaseItemDate, purchaseItemColor, purchaseItemSize, purchaseItemMaterial, purchaseItemQty, purchaseItemPricePerUnit, purchaseItemGst, purchaseItemHsn, purchaseItemNote } = req.body;

    let purchaseItemModelQuery = new purchaseItemModel({
        purchaseItemName,
        purchaseItemDate,
        purchaseItemColor,
        purchaseItemSize,
        purchaseItemMaterial,
        purchaseItemQty,
        purchaseItemPricePerUnit,
        purchaseItemGst,
        purchaseItemHsn,
        purchaseItemNote
    });

    purchaseItemModelQuery.save().then(() => {
        res.json({ msg: 'purchaseItemModelQuery executed' });
    }).catch((e) => {
        res.json(e);
    })
});

router.post('/purchaseItemEdit', (req, res) => {
    let { purchaseItemName, purchaseItemDate, purchaseItemColor, purchaseItemSize, purchaseItemMaterial, purchaseItemQty, purchaseItemPricePerUnit, purchaseItemGst, purchaseItemHsn, purchaseItemNote } = req.body;
    let { id } = req.body;

    purchaseItemModel.findOneAndUpdate(
        {
            _id: id
        },
        {
            $set: { purchaseItemName, purchaseItemDate, purchaseItemColor, purchaseItemSize, purchaseItemMaterial, purchaseItemQty, purchaseItemPricePerUnit, purchaseItemGst, purchaseItemHsn, purchaseItemNote }
        }
    ).then(() => {
        res.json({ msg: 'purchaseItemModelQuery updated' });
    }).catch((e) => {
        res.json(e);
    });
});

router.get('/purchaseItemView', (req, res) => {
    purchaseItemModel.find().then((responseData) => {
        res.json({ data: responseData });
    }).catch((e) => {
        res.json(e);
    });
});

router.post('/purchaseItemDelete', (req, res) => {
    let { id } = req.body;

    purchaseItemModel.findOneAndDelete(
        {
            _id: id
        }
    ).then(() => {
        res.json({ msg: 'purchaseItemModelQuery deleted' });
    }).catch((e) => {
        res.json(e);
    });
});


module.exports = router;