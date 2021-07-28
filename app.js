const express = require("express");
const app = express();


app.get('/', (req, res) => {
    res.send('listening');
})


const PORT = process.env.PORT || 8050;

app.listen(PORT, () => {
    console.log('server running');
})