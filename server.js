require('dotenv').config();

const express = require('express'),
    app = express(),
    port = process.env.PORT,
    server = app.listen(port, () => console.log(`Listening on port ${port}...`))
    cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({"extended":true}));

// representation of our DB config file
require('./server/configs/database.config');

// representation of routes file export - annonymous function
require('./server/routes/authors.routes')(app);