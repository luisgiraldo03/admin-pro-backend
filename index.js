const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();

//crear e servidor de express
const app = express();

//cors
app.use(cors());

//lectura y parseo del body
app.use(express.json());

//Base de datos
dbConnection();

//rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/login', require('./routes/auth'));


app.listen(process.env.PORT, () => {
    console.log("listening port: " + process.env.PORT);
});