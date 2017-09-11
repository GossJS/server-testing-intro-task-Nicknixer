'use strict';
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET length', () => {
      it('?1wdqwd must be responsed with 6', (done) => {
        chai.request(server)
            .get('/length?1wdqwd')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.eql('6');
              done();
            });
      });
      
      it('?1 must be responsed with 1', (done) => {
        chai.request(server)
            .get('/length?1')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.eql('1');
              done();
            });
      });
  });
  