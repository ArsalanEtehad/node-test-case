var db = require('./db.js')
module.exports.handleSignUp = (email, password)=>{
  //what needs to be done here:
        //1.Check if the email already exists
        //2.save the user to db
        //3.log the welcome message

  db.saveUser({
    email: email,
    password: password
  })

}
