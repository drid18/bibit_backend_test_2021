let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../index');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Movie Search API', () => {
    /*
      * Test the /GET route
      */
    describe('/GET search', () => {
        it('it should GET all movie list', (done) => {
            chai.request(server)
                .get('/search?s=batman&y&page')
                .end((err, res) => {
                    res.should.have.status(200);
                    var response = res.body
                    response.rc.should.be.eql('00');
                    done();
                });
        });
    });
    
    describe('/GET detail', () => {
        it('it should GET detail movie', (done) => {
            chai.request(server)
                .get('/detail?t=iron&y=2012')
                .end((err, res) => {
                    res.should.have.status(200);
                    var response = res.body
                    response.rc.should.be.eql('00');
                    done();
                });
        });
    });

});