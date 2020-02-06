const pages = require('./pagesConfig');
const pp = require('./pageParser');
const pageParser = new pp();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.listen(8000, () => console.log('Server started'));

app.get('/page/:id', async (req, res) => {
  const ret = await pageParser.getContentOfPages(1, pages);
  res.send(ret);
})
