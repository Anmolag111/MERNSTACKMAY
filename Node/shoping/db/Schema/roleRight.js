const mongoose=require('../connection');
var Schema=mongoose.Schema;
var roleRightSchema= new Schema({
    //FK
     rightid:{
        type:Schema.Types.ObjectId,
        ref:'rightModel',
        required:true,
      },
      roleid:{
        type:Schema.Types.ObjectId,
        ref:'roleModel',
        required:true,
      },
    
    status:{
        type:String,
        default:'A',
    }
})
var roleRightModel=mongoose.model('rolerightmapping',roleRightSchema);
module.exports= roleRightModel;