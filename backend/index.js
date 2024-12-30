
require('dotenv').config();
require('./models/db');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();
const AuthRouter =  require('./routes/AuthRouter');
const ProductRoter =  require('./routes/ProductRoter');


app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/products', ProductRoter);

app.get('/ping', (req, res) => {
    res.send('Hello Pong');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
