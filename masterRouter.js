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


/************************************************************************************ */
/************************************************************************************ */
let masterPurchaseRawItemSchema = new schema({
    itemName: String
});
let masterPurchaseRawItemModel = mongoose.model('masterPurchaseRawItem', masterPurchaseRawItemSchema);

router.post('/masterPurchaseRawItemPost', (req, res) => {
    let masterPurchaseRawItemModelQuery = new masterPurchaseRawItemModel({
        itemName: req.body.itemName
    });
    masterPurchaseRawItemModelQuery.save().then(() => {
        res.json({ msg: 'masterPurchaseRawItemModelQuery executed' });
    }).catch((e) => {
        res.json(e);
    })
});

router.post('/masterPurchaseRawItemEdit', (req, res) => {
    let { itemName } = req.body;
    let { id } = req.body;
    masterPurchaseRawItemModel.findOneAndUpdate(
        {
            _id: id
        },
        {
            $set: { itemName }
        }
    ).then(() => {
        res.json({ msg: 'masterPurchaseRawItemModelQuery updated' });
    }).catch((e) => {
        res.json(e);
    });
});

router.get('/masterPurchaseRawItemView', (req, res) => {
    masterPurchaseRawItemModel.find().then((responseData) => {
        res.json({ data: responseData });
    }).catch((e) => {
        res.json(e);
    });
});

router.post('/masterPurchaseRawItemDelete', (req, res) => {
    let { id } = req.body;
    masterPurchaseRawItemModel.findOneAndDelete(
        {
            _id: id
        }
    ).then(() => {
        res.json({ msg: 'masterPurchaseRawItemModelQuery deleted' });
    }).catch((e) => {
        res.json(e);
    });
});

/************************************************************************************ */
/************************************************************************************ */
let masterPurchaseMachineItemSchema = new schema({
    itemName: String
});
let masterPurchaseMachineItemModel = mongoose.model('masterPurchaseMachineItem', masterPurchaseMachineItemSchema);

router.post('/masterPurchaseMachineItemPost', (req, res) => {
    let masterPurchaseMachineItemModelQuery = new masterPurchaseMachineItemModel({
        itemName: req.body.itemName
    });
    masterPurchaseMachineItemModelQuery.save().then(() => {
        res.json({ msg: 'masterPurchaseMachineItemModelQuery executed' });
    }).catch((e) => {
        res.json(e);
    })
});

router.post('/masterPurchaseMachineItemEdit', (req, res) => {
    let { itemName } = req.body;
    let { id } = req.body;
    masterPurchaseMachineItemModel.findOneAndUpdate(
        {
            _id: id
        },
        {
            $set: { itemName }
        }
    ).then(() => {
        res.json({ msg: 'masterPurchaseMachineItemModelQuery updated' });
    }).catch((e) => {
        res.json(e);
    });
});

router.get('/masterPurchaseMachineItemView', (req, res) => {
    masterPurchaseMachineItemModel.find().then((responseData) => {
        res.json({ data: responseData });
    }).catch((e) => {
        res.json(e);
    });
});

router.post('/masterPurchaseMachineItemDelete', (req, res) => {
    let { id } = req.body;
    masterPurchaseMachineItemModel.findOneAndDelete(
        {
            _id: id
        }
    ).then(() => {
        res.json({ msg: 'masterPurchaseMachineItemModelQuery deleted' });
    }).catch((e) => {
        res.json(e);
    });
});


/************************************************************************************ */
/************************************************************************************ */
let masterSizeSchema = new schema({
    sizeName: String
});
let masterSizeModel = mongoose.model('masterSize', masterSizeSchema);

router.post('/masterSizePost', (req, res) => {
    let masterSizeModelQuery = new masterSizeModel({
        itemName: req.body.sizeName
    });
    masterSizeModelQuery.save().then(() => {
        res.json({ msg: 'masterSizeModelQuery executed' });
    }).catch((e) => {
        res.json(e);
    })
});

router.post('/masterSizeEdit', (req, res) => {
    let { itemName } = req.body;
    let { id } = req.body;
    masterSizeModel.findOneAndUpdate(
        {
            _id: id
        },
        {
            $set: { itemName }
        }
    ).then(() => {
        res.json({ msg: 'masterSizeModelQuery updated' });
    }).catch((e) => {
        res.json(e);
    });
});

router.get('/masterSizeView', (req, res) => {
    masterSizeModel.find().then((responseData) => {
        res.json({ data: responseData });
    }).catch((e) => {
        res.json(e);
    });
});

router.post('/masterSizeDelete', (req, res) => {
    let { id } = req.body;
    masterSizeModel.findOneAndDelete(
        {
            _id: id
        }
    ).then(() => {
        res.json({ msg: 'masterSizeModelQuery deleted' });
    }).catch((e) => {
        res.json(e);
    });
});


/************************************************************************************ */
/************************************************************************************ */
let masterColorSchema = new schema({
    colorName: String
});
let masterColorModel = mongoose.model('masterColor', masterColorSchema);

router.post('/masterColorPost', (req, res) => {
    let masterColorModelQuery = new masterColorModel({
        colorName: req.body.sizeName
    });
    masterColorModelQuery.save().then(() => {
        res.json({ msg: 'masterColorModelQuery executed' });
    }).catch((e) => {
        res.json(e);
    })
});

router.post('/masterColorEdit', (req, res) => {
    let { colorName } = req.body;
    let { id } = req.body;
    masterColorModel.findOneAndUpdate(
        {
            _id: id
        },
        {
            $set: { itemName }
        }
    ).then(() => {
        res.json({ msg: 'masterColorModelQuery updated' });
    }).catch((e) => {
        res.json(e);
    });
});

router.get('/masterColorView', (req, res) => {
    masterColorModel.find().then((responseData) => {
        res.json({ data: responseData });
    }).catch((e) => {
        res.json(e);
    });
});

router.post('/masterColorDelete', (req, res) => {
    let { id } = req.body;
    masterColorModel.findOneAndDelete(
        {
            _id: id
        }
    ).then(() => {
        res.json({ msg: 'masterColorModelQuery deleted' });
    }).catch((e) => {
        res.json(e);
    });
});


module.exports = router;