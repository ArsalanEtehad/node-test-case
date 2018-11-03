//╰─$ npm test
//╰─$ nodemon --exec 'npm test'                                                                                                                   1 ↵
const utils = require('./utils')
const expect = require('expect')

//=======================================

describe('Utils', ()=>{
  describe('#add',()=>{
    it('should add two numbers', ()=>{
      var res = utils.add(33,11)
      expect(res).toBe(44).toBeA('number')
    })
    //---------------------------------------
    //use done() when testing async Functions
    it('should asynchronously add two numbers', (done)=>{ //(done()) notifies Mocha that this is a async func and has to wait until it gets DONE
      utils.asyncAdd(4,3,(sum)=>{
        expect(sum).toBe(7).toBeA('number')
        done() //result:   ✓ should add asynchronously two numbers (1003ms)
      })
    })
  })
  //---------------------------------------
  it('should subtract two numbers',()=>{
    var res = utils.sub(33,20)
    expect(res).toBe(13).toBeA('number')
  })
  //---------------------------------------
  describe('#square',()=>{
    it('should square the number',()=>{
      var res = utils.square(5)
      expect(res).toBe(25).toBeA('number')
    })
    //---------------------------------------
    it('should asynchronously square the number',(done)=>{
      utils.asyncSquare(3,(res)=>{
        expect(res).toBe(9).toBeA('number')
        done()
      })
    })    
  })
  //---------------------------------------
  it('should expect some values', ()=>{
    expect(12).toNotBe(14)
  })
  //---------------------------------------

  it('should set firstname and lastname',()=>{
    var user ={}
    user = utils.setName(user, 'Arsalan Ettehadolhagh');
    expect(user.firstname).toEqual('Arsalan');
    expect(user.lastname).toEqual('Ettehadolhagh')
  })
  //---------------------------------------



})
