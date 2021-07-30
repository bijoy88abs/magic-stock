const express = require("express");
var cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const stockMasterRouter = require("./masterRouter");
const stockPurchaseRouter = require("./purchaseRouter");

app.use(cors());
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());


app.use('/master-stock', stockMasterRouter);
app.use('/purchase-stock', stockPurchaseRouter);

const PORT = process.env.PORT || 8050;
mongoose
    .connect(`mongodb+srv://magicmoment:8420541261Atlas@cluster0.cxiug.mongodb.net/stock?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log('server running');
        })
    })
    .catch((e) => { console.log(e); });

