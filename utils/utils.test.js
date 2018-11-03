//╰─$ npm test
//╰─$ nodemon --exec 'npm test'                                                                                                                   1 ↵
const utils = require('./utils')
const expect = require('expect')



it('should add two numbers', ()=>{
  var res = utils.add(33,11)
  expect(res).toBe(44).toBeA('number')
})

it('should subtract two numbers',()=>{
  var res = utils.sub(33,20)
  expect(res).toBe(13).toBeA('number')
})

it('should square a number',()=>{
  var res = utils.square(5)
  expect(res).toBe(25).toBeA('number')
})

it('should expect some values', ()=>{
  expect(12).toNotBe(14)
})


it('should set firstname and lastname',()=>{
  var user ={}
  user = utils.setName(user, 'Arsalan Ettehadolhagh');
  expect(user.firstname).toEqual('Arsalan');
  expect(user.lastname).toEqual('Ettehadolhagh')
})
