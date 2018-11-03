//╰─$ npm test
//╰─$ nodemon --exec 'npm test'                                                                                                                   1 ↵
const utils = require('./utils')
const expect = require('expect')



it('should add two numbers', ()=>{
  var res = utils.add(33,11)
  expect(res).toBe(44).toBeA('number')
  // if(res !== 44){
  //   throw new Error(`Expected 44, but got ${res}`)
  // }
})

it('should subtract two numbers',()=>{
  var res = utils.sub(33,20)
  expect(res).toBe(13).toBeA('number')
  // if (res !== 13){
  //   throw new Error(`Expected 13, but got ${res}`)
  // }
})

it('should square a number',()=>{
  var res = utils.square(5)
  expect(res).toBe(25).toBeA('number')
  // if (res !== 25){
  //   throw new Error(`Expected 25, but got ${res}`)
  // }
})
