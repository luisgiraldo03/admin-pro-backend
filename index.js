const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();

//crear e servidor de express
const app = express();

//cors
app.use(cors);

//Base de datos
dbConnection();


app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    });
});

app.listen(process.env.PORT, () => {
    console.log("listening port: " + process.env.PORT);
});