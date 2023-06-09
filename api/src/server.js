require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// Express app
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
    next();
});

app.use('/api', routes);

// Connect to DB and start server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () =>  {
            console.log(`Connected to DB\nListening on port ${process.env.PORT}`);
        });
    })
    .catch(err => console.log(err));

