const mongoose=require('mongoose');
const config=require('../utils/config');
mongoose.connect(config.db.url,{poolSize:'10'},()=>{
    console.log('Connection created');
});
module.exports=mongoose;