const uuidv4 = require('uuid/v4');
module.exports = {
    sessionid:"",
   login:function(name,password){
     
        if(name.length<0){
            throw new Error("username can't be null")
        }
        if(password.length<0){
            throw new Error("password can't be null")
        }
        return this.sessionid=uuidv4();
  
   },

   logout:function(){
      this.sessionid="";
   }
      
}