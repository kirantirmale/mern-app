require('dotenv').config();
require('./models/db');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const AuthRouter = require('./routes/AuthRouter');
const ProductRoter = require('./routes/ProductRoter');

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || Math.floor(Math.random() * (65535 - 1024 + 1)) + 1024; 

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/products', ProductRoter);

app.get('/ping', (req, res) => {
    res.send('Hello Pong');
});

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`Port ${port} is in use. Trying another port...`);
        const newPort = Math.floor(Math.random() * (65535 - 1024 + 1)) + 1024;
        server.listen(newPort, () => {
            console.log(`Server running on http://localhost:${newPort}`);
        });
    } else {
        console.error('Server error:', err);
    }
});
