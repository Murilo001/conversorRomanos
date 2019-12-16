/**
 * Base em MVC criada para quaisquer outros projetos.
 *
 * @author Murilo de Oliveira Silva.
 */
import models, { connectDb } from '../repositories/mongoConnection';

const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');

const app = express();
app.use(async (req, res, next) => {
  req.context = {
    models,
  };
  next();
});

const router = express.Router();

/** Controller */
const productRoute = require('../entitys/entityProduct/routes/productRoute');
/** Controller */

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', '../views/public/layout');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(express.static('dist'));

app.use(cors());
app.use(bodyParser.json());

/** Routes of Entitys */
productRoute(router);
/** Routes of Entitys */

app.use(router);

const eraseDatabaseOnSync = true;
const porta = 3000 || process.env.PORT;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.Product.deleteMany({}),
    ]);
  }
  app.listen(porta);
});

module.exports = app;
