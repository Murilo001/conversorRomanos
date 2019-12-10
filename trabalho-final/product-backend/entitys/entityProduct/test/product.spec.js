import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../config/server';
import Product from '../../../repositories/model/product';

process.env.NODE_ENV = 'test';

chai.use(chaiHttp);
chai.should();
describe('Products', () => {
  beforeEach((done) => {
    Product.remove({}, (err) => {
      done();
    });
  });

  describe('GET /', () => {
    it('should get all products record with clean database', (done) => {
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
      const tempProduct = new Product({
        name: 'Bitter Root',
        description: 'Compound to soften bowel problems.',
        price: 59.90,
        createdAt: new Date(),
      });
      tempProduct.save((err, savedProduct) => {
        chai.request(app)
          .get(`/product?id=${savedProduct.id}`)
          .send(savedProduct)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(1);
            done();
          });
      });
    });

    it('should not get a single product record', (done) => {
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
    it('Verify product register', (done) => {
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
    it('Verify product update', (done) => {
      const product = new Product({
        name: 'Gincobiloba',
        description: 'Compound to soften bowel problems.',
        price: 34.90,
        createdAt: new Date(),
      });
      product.save((err, product) => {
        chai.request(app)
          .put(`/product/${product.id}`)
          .send({ name: 'Gincobiloba Changed', description: 'Description Changed', price: 39.90 })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('name').eql('Gincobiloba Changed');
            done();
          });
      });
    });
  });

  describe('/DELETE /:id Product', () => {
    it('Verify product delete', (done) => {
      const product = new Product({
        name: 'Gincobiloba',
        description: 'Compound that serves to alleviate intestinal problems.',
        price: 34.90,
        createdAt: new Date(),
      });
      product.save((err, product) => {
        chai.request(app)
          .delete(`/product/${product.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
          });
      });
    });
  });
});
