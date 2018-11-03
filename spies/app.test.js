const expect = require('expect')


it('should call spy', ()=>{
  var spy = expect.createSpy()
  spy('rick')
  expect(spy).toHaveBeenCalled().toHaveBeenCalledWith('rick');
})
