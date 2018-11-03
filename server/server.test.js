//https://github.com/visionmedia/supertest

const request = require('supertest')
// const express = require('express')

var app = require('./server').app


it('should return Hello world response', (done)=>{
  request(app)
    .get('/')
    .expect('Hello world')
    .expect(200)
    .end(done)
})

// it('respond with json', function(done) {
//   request(app)
//     .get('/user')
//     .set('Accept', 'application/json')
//     .expect('Content-Type', /json/)
//     .expect(200, done);
// });
