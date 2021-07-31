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
    purchaseItemNote: String,
    purchaseItemSupplier: String
});

let purchaseItemModel = mongoose.model('purchaseItem', purchaseItemSchema);

router.post('/purchaseItemPost', (req, res) => {
    let { purchaseItemName, purchaseItemDate, purchaseItemColor, purchaseItemSize, purchaseItemMaterial, purchaseItemQty, purchaseItemPricePerUnit, purchaseItemGst, purchaseItemHsn, purchaseItemNote, purchaseItemSupplier } = req.body;

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
        purchaseItemNote,
        purchaseItemSupplier
    });

    purchaseItemModelQuery.save().then(() => {
        res.json({ msg: 'purchaseItemModelQuery executed' });
    }).catch((e) => {
        res.json(e);
    })
});

router.post('/purchaseItemEdit', (req, res) => {
    let { purchaseItemName, purchaseItemDate, purchaseItemColor, purchaseItemSize, purchaseItemMaterial, purchaseItemQty, purchaseItemPricePerUnit, purchaseItemGst, purchaseItemHsn, purchaseItemNote, purchaseItemSupplier } = req.body;
    let { id } = req.body;

    purchaseItemModel.findOneAndUpdate(
        {
            _id: id
        },
        {
            $set: { purchaseItemName, purchaseItemDate, purchaseItemColor, purchaseItemSize, purchaseItemMaterial, purchaseItemQty, purchaseItemPricePerUnit, purchaseItemGst, purchaseItemHsn, purchaseItemNote, purchaseItemSupplier }
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



/************************************************************************************ */
/************************************************************************************ */
let purchaseRawSchema = new schema({
    purchaseItemName: String,
    purchaseItemDate: String,
    purchaseItemQty: String,
    purchaseItemPricePerUnit: String,
    purchaseItemGst: String,
    purchaseItemHsn: String,
    purchaseItemNote: String,
    purchaseItemSupplier: String
});

let purchaseRawModel = mongoose.model('purchaseRawItem', purchaseRawSchema);

router.post('/purchaseRawPost', (req, res) => {
    let { purchaseItemName, purchaseItemDate, purchaseItemQty, purchaseItemPricePerUnit, purchaseItemGst, purchaseItemHsn, purchaseItemNote, purchaseItemSupplier } = req.body;

    let purchaseRawModelQuery = new purchaseRawModel({
        purchaseItemName,
        purchaseItemDate,
        purchaseItemQty,
        purchaseItemPricePerUnit,
        purchaseItemGst,
        purchaseItemHsn,
        purchaseItemNote,
        purchaseItemSupplier
    });

    purchaseRawModelQuery.save().then(() => {
        res.json({ msg: 'purchaseRawModelQuery executed' });
    }).catch((e) => {
        res.json(e);
    })
});

router.post('/purchaseRawEdit', (req, res) => {
    let { purchaseItemName, purchaseItemDate, purchaseItemQty, purchaseItemPricePerUnit, purchaseItemGst, purchaseItemHsn, purchaseItemNote, purchaseItemSupplier } = req.body;
    let { id } = req.body;

    purchaseRawModel.findOneAndUpdate(
        {
            _id: id
        },
        {
            $set: { purchaseItemName, purchaseItemDate, purchaseItemQty, purchaseItemPricePerUnit, purchaseItemGst, purchaseItemHsn, purchaseItemNote, purchaseItemSupplier }
        }
    ).then(() => {
        res.json({ msg: 'purchaseRawModelQuery updated' });
    }).catch((e) => {
        res.json(e);
    });
});

router.get('/purchaseRawView', (req, res) => {
    purchaseRawModel.find().then((responseData) => {
        res.json({ data: responseData });
    }).catch((e) => {
        res.json(e);
    });
});

router.post('/purchaseRawDelete', (req, res) => {
    let { id } = req.body;

    purchaseRawModel.findOneAndDelete(
        {
            _id: id
        }
    ).then(() => {
        res.json({ msg: 'purchaseRawItemModelQuery deleted' });
    }).catch((e) => {
        res.json(e);
    });
});


/************************************************************************************ */
/************************************************************************************ */
let purchaseMachineSchema = new schema({
    purchaseItemName: String,
    purchaseItemDate: String,
    purchaseItemQty: String,
    purchaseItemPricePerUnit: String,
    purchaseItemGst: String,
    purchaseItemHsn: String,
    purchaseItemNote: String,
    purchaseItemSupplier: String
});

let purchaseMachineModel = mongoose.model('purchaseMachineItem', purchaseMachineSchema);

router.post('/purchaseMachinePost', (req, res) => {
    let { purchaseItemName, purchaseItemDate, purchaseItemQty, purchaseItemPricePerUnit, purchaseItemGst, purchaseItemHsn, purchaseItemNote, purchaseItemSupplier } = req.body;

    let purchaseMachineModelQuery = new purchaseMachineModel({
        purchaseItemName,
        purchaseItemDate,
        purchaseItemQty,
        purchaseItemPricePerUnit,
        purchaseItemGst,
        purchaseItemHsn,
        purchaseItemNote,
        purchaseItemSupplier
    });

    purchaseMachineModelQuery.save().then(() => {
        res.json({ msg: 'purchaseMachineModelQuery executed' });
    }).catch((e) => {
        res.json(e);
    })
});

router.post('/purchaseMachineEdit', (req, res) => {
    let { purchaseItemName, purchaseItemDate, purchaseItemQty, purchaseItemPricePerUnit, purchaseItemGst, purchaseItemHsn, purchaseItemNote, purchaseItemSupplier } = req.body;
    let { id } = req.body;

    purchaseMachineModel.findOneAndUpdate(
        {
            _id: id
        },
        {
            $set: { purchaseItemName, purchaseItemDate, purchaseItemQty, purchaseItemPricePerUnit, purchaseItemGst, purchaseItemHsn, purchaseItemNote, purchaseItemSupplier }
        }
    ).then(() => {
        res.json({ msg: 'purchaseMachineModelQuery updated' });
    }).catch((e) => {
        res.json(e);
    });
});

router.get('/purchaseMachineView', (req, res) => {
    purchaseMachineModel.find().then((responseData) => {
        res.json({ data: responseData });
    }).catch((e) => {
        res.json(e);
    });
});

router.post('/purchaseMachineDelete', (req, res) => {
    let { id } = req.body;

    purchaseMachineModel.findOneAndDelete(
        {
            _id: id
        }
    ).then(() => {
        res.json({ msg: 'purchaseMachineItemModelQuery deleted' });
    }).catch((e) => {
        res.json(e);
    });
});


module.exports = router;