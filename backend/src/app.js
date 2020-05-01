const express = require('express');

const {errors} = require('celebrate');

const app = express();
const routes = require("./routes");

const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());





module.exports = app;
