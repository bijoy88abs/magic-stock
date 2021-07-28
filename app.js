const express = require("express");
const app = express();
const mongoose = require("mongoose");

const stockRouter = require("./router");


app.use('/stock', stockRouter);


const PORT = process.env.PORT || 8050;
mongoose
    .connect(`mongodb+srv://magicmoment:8420541261Atlas@cluster0.cxiug.mongodb.net/stock?retryWrites=true&w=majority`,
        { useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => {
        app.listen(PORT, () => {
            console.log('server running');
        })
    })
    .catch((e) => { console.log(e); });

