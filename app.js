const express = require("express");
const app = express();

const PORT = process.env.PORT || 8050;

app.listen(PORT, () => {
    console.log('server running');
})