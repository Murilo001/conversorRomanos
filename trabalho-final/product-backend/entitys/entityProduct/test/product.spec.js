// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../config/server';
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Products", () => {
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

  describe("GET /", () => {
    // Test to get all products record
    it("should get all products record", (done) => {
      chai.request(app)
        .get('/product')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    // Test to get single product record
    it("should get a single product record", (done) => {
      const id = 1;
      chai.request(app)
        .get(`/product/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    // Test to get single product record
    it("should not get a single product record", (done) => {
      const id = 5;
      chai.request(app)
        .get(`/product/${id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});