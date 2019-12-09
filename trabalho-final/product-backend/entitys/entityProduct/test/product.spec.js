// Import the dependencies for testing
//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

import mongoose from 'mongoose';
import Product from '../../../repositories/model/product';

import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../config/server';
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Products", () => {
  beforeEach((done) => { //Before each test we empty the database
    Product.remove({}, (err) => {
      done();
    });
  });

  describe("GET /", () => {
    // Test to get all products record
    it("should get all products record with clean database", (done) => {
      chai.request(app)
        .get('/product')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });

    /*
    * Test the /GET/:id route
    */
    describe('GET /:id', () => {
      it('it should GET a product by the given id', (done) => {
        let product = new Product({
          name: 'Raíz Amarga',
          description: 'Composto que serve para amenizar problemas intestinais.',
          price: 59.90,
          createdAt: new Date()
        });
        product.save((err, product) => {
          chai.request(app)
            .get('/product?id=' + product.id)
            .send(product)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(1);
              done();
            });
        });

      });
    });

    // Test to get single product record
    it("should not get a single product record", (done) => {
      const name = 'Produto não cadastrado';
      chai.request(app)
        .get(`/product?name=${name}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe('/POST Product', () => {
    it('Verify product register', (done) => {
      const testProduct = {
        name: 'Raíz Amarga',
        description: 'Composto que serve para amenizar problemas intestinais.',
        price: 59.90,
        createdAt: new Date(),
      };
      chai.request(app)
        .post('/product')
        .send(testProduct)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/PUT /:id Product', () => {
    it('Verify product update', (done) => {
      let product = new Product({
        name: 'Gincobiloba',
        description: 'Composto que serve para amenizar problemas intestinais.',
        price: 34.90,
        createdAt: new Date()
      });
      product.save((err, product) => {
        chai.request(app)
          .put('/product/' + product.id)
          .send({ name: 'Gincobiloba Alterado', description: 'Descrição manipulada', price: 39.90 })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('name').eql('Gincobiloba Alterado');
            done();
          });
      });
    });
  });

  describe('/DELETE /:id Product', () => {
    it('Verify product delete', (done) => {
      let product = new Product({
        name: 'Gincobiloba',
        description: 'Composto que serve para amenizar problemas intestinais.',
        price: 34.90,
        createdAt: new Date()
      });
      product.save((err, product) => {
        chai.request(app)
          .delete('/product/' + product.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
          });
      });
    });
  });

});