module.exports.add = (a,b)=>a+b
//---------------------------------------
module.exports.asyncAdd = (a, b, callback)=>{
  setTimeout(()=>{
              callback(a+b)
      },1000)//delays more than 2 seconds would cause tests to fail, As Mocha failes any delay longer than 2000 ms.
}
//---------------------------------------
module.exports.sub = (a,b)=>a-b
//---------------------------------------
module.exports.square = (a)=>a*a
//---------------------------------------
module.exports.asyncSquare= (a,callback)=>{
  setTimeout(()=>{
    callback(a*a)
  },1000)
}
//---------------------------------------
module.exports.setName= (user, fullname)=>{
  var name = fullname.split(' ')
  user.firstname = name[0]
  user.lastname = name[1]
  return user
}
//---------------------------------------
