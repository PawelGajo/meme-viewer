const pages = require('./pagesConfig');
const pp = require('./pageParser');
const pageParser = new pp();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.listen(8000, () => console.log('Server started'));

app.get('/page/:id', async (req, res) => {
  const ret = await pageParser.getContentOfPages(req.params.id, pages);
  res.send(ret);
})
