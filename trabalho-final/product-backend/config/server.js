/**
 * Base em MVC criada para quaisquer outros projetos.
 *
 * @author Murilo de Oliveira Silva.
 */
import models, { connectDb } from './../repositories/mongoConnection';

const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');

const app = express();
app.use(async (req, res, next) => {
  req.context = {
    models,
    //me: await models.User.findByLogin('admin'),
  };
  next();
});

const multer = require('multer');
const router = express.Router();

/** View */
const publicViewRoute = require('../views/public/routes/publicRoute');
/** View */

/** Controller */
const productRoute = require('../entitys/entityProduct/routes/productRoute');
/** Controller */

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', '../views/public/layout');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(express.static('dist'));

// SET STORAGE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
const upload = multer({ storage: storage })

app.use(cors());
app.use(bodyParser.json());

/** Routes of VIEW */
publicViewRoute(router, app);
/** Routes of VIEW */

/** Routes of Entitys */
productRoute(router);
//readHtmlRoute(router, upload);
/** Routes of Entitys */

/** End Swagger generator */

app.use(router);

const eraseDatabaseOnSync = true;
const porta = 3000 || process.env.PORT;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.Product.deleteMany({}),
    ]);
  }
  app.listen(porta, () =>
    console.log(`Example app listening on port ${porta}!`),
  );
});

module.exports = app;
/*

const appSwagger = express();
const argv = require('minimist')(process.argv.slice(2));

app.use("/v1", appSwagger);

const swagger = require('swagger-node-express').createNew(appSwagger);
swagger.setApiInfo({
  title: "example API",
  description: "API to do something, manage something...",
  termsOfServiceUrl: "",
  contact: "yourname@something.com",
  license: "",
  licenseUrl: ""
});
expressSwagger(options);
*/