const express = require('express');
const productRouter = require('./routes/products')
const app = express();
const port = process.env.PORT || 5000;

app.use('/', productRouter)

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app
