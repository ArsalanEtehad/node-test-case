const expect = require('expect')
const rewire = require('rewire')

var app = rewire('./app')  //rewire instead of require

it('should call spy', ()=>{
  var spy = expect.createSpy()
  spy('rick')
  expect(spy).toHaveBeenCalled().toHaveBeenCalledWith('rick');
})
