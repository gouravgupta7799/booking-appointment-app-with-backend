const express = require('express');
const sequelize = require('./util/dataBase');
const bodyperser = require('body-parser');
const app = express();
let router = require('./routers/router');
const cors = require('cors');
app.use(cors());

app.use(bodyperser.json({ extended: false }))

app.use(router)

sequelize.sync()
  .catch(err => console.log(err))

app.listen(4000)