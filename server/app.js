require('@babel/register');
require('dotenv').config();

const express = require('express');
const serverConfig = require('./config/serverConfig');
const path = require('path');

const app = express();

const indexRouter = require('./routes/index.routes');

serverConfig(app);
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/', indexRouter);
app.get('*', (req, res) => {
  res.sendFile(path.resolve('../client/dist/index.html'));
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Наша шарманка играет на ${PORT} порту`);
});
