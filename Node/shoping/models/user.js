class User{
    constructor(userid,password){
        this.userid=userid;
        this.password=password;
    }
    toString(){
        return `UserID is ${this.userid} amd password is ${this.password}`;
    }
}
module.exports=User;