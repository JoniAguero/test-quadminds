"use strict"
const chaiHttp = require('chai-http')
const chai = require('chai')
const expect = chai.expect
const config = require('../config')

chai.use(chaiHttp)

describe('Notes Routes', function () {

  describe('GET /notes', () => {
    it('should get status 200', (done) => {
      try {
      chai.request(config.API_URL)
        .get('/notes/all')
        .end(function (err, res) {
          expect(res).to.have.status(200)
          done()
        })
      } catch (error) {
        console.log(error);
      }
    })
    it('should get all notes', (done) => {
      try {
      chai.request(config.API_URL)
        .get('/notes/all')
        .end(function (err, res) {
          expect(res.body.length).greaterThan(1)
          done()
        })
      } catch (error) {
        console.log(error);
      }
    })
    it('should get the note with id x', (done) => {
      try {
        chai.request(config.API_URL)
        .get('/notes/by_id/?id=5c8b91c10028112ecc16cef9')
        .end(function (err, res) {
          expect(res.body[0]).to.have.property('_id').to.be.equal('5c8b91c10028112ecc16cef9')
          done()
        })
      } catch (error) {
        console.log(error);
      }
    })
  })
});
