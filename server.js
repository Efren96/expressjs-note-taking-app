const express = require('express');
const path = require('path');
const htmlData = require('../Develop/public/index.html');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));



app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});