const pages = require('./pagesConfig');
const pp = require('./pageParser');
const pageParser = new pp();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors(corsOptions))
app.listen(8000, () => console.log('Server started'));

app.get('/page/:id', async (req, res) => {
  const ret = await pageParser.getContentOfPages(req.params.id, pages);
  res.send(ret);
})
