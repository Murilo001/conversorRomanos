import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../config/server';
import Product from '../../../repositories/model/product';

process.env.NODE_ENV = 'test';

chai.use(chaiHttp);
chai.should();

describe('Products', () => {
  beforeEach((done) => {
    Product.deleteMany({}, () => {
      done();
    });
  });

  describe('GET /', () => {
    it('it should GET all products record with clean database', (done) => {
      chai.request(app)
        .get('/product')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe('GET /:param', () => {
    it('it should GET a product by the given id', (done) => {
      const testProduct = new Product({
        name: 'Bitter Root',
        description: 'Compound to soften bowel problems.',
        price: 59.90,
        createdAt: new Date(),
      });
      testProduct.save((saveError, savedProduct) => {
        chai.request(app)
          .get(`/product?id=${savedProduct.id}`)
          .send(savedProduct)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
          });
      });
    });

    it('it should NOT GET a single product record', (done) => {
      const name = 'Unregistered Product';
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
    it('it should POST and verify product register', (done) => {
      const testProduct = {
        name: 'Bitter Root',
        description: 'Compound to soften bowel problems.',
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
    it('it should UPDATE and verify product update', (done) => {
      const testProduct = new Product({
        name: 'Gincobiloba',
        description: 'Compound to soften bowel problems.',
        price: 34.90,
        createdAt: new Date(),
      });
      testProduct.save((saveError, productSaved) => {
        chai.request(app)
          .put(`/product/${productSaved.id}`)
          .send({ name: 'Gincobiloba Changed', description: 'Description Changed', price: 39.90 })
          .end((updateError, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('name').eql('Gincobiloba Changed');
            done();
          });
      });
    });
  });

  describe('/DELETE /:id Product', () => {
    it('it should DELETE and verify product delete', (done) => {
      const testProduct = new Product({
        name: 'Gincobiloba',
        description: 'Compound that serves to alleviate intestinal problems.',
        price: 34.90,
        createdAt: new Date(),
      });
      testProduct.save((saveError, productSaved) => {
        chai.request(app)
          .delete(`/product/${productSaved.id}`)
          .end((deleteError, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });
  });
});
