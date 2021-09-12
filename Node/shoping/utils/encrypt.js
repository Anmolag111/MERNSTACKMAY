const bcrypt=require('bcryptjs');
const encrypt={
    salt:10,
    doEncrypt(plainPassword){
        const encPassword=bcrypt.hashSync(plainPassword,this.salt);
        return encPassword;
    },
    compare(plainPassword,dbPassword){
        const resultSync=bcrypt.compareSync(plainPassword,dbPassword);
        return resultSync;
    }
}
module.exports=encrypt;