const express = require('express');
const UserRole = require('../models/roles');
const route = express.Router();

route.post('/adduserrole',(request,response)=>{
    const UserRole=require('../models/userrole')
    const userid=request.body.userid;
    const roleid=request.body.roleid;
    const userRoleObject=new UserRole(userid,roleid);
    const roleOperations=require('../db/helper/userrolecrud');
    var promise=roleOperations.add(userRoleObject);
    promise.then(data=>{
        response.json(" User Role added successfully");
    }).catch(err=>{
        response.json("Error during user role add");
    })
});
module.exports=route;
  
       // var userObjectid=data._id;
       // const promiseUserRoleFind =userRoleOperations.search(role);
       // promiseUserRoleFind.then(doc=>{
       //  console.log("Role Succesfully finded");
       //      const userRoleObject =new userRole(userObjectid,doc._id);
       //      const promiseUserRoleAdd=userRoleOperations.add(userRoleObject);
       //      promiseUserRoleAdd.then(data1=>{
       //          //
       //          console.log("Role Succesfully added");
       //          res.send("Role Succesfully added");
       //      }).catch(err1=>{
       //          res.send("Error in User Role Mapping");
       //          logger.error("Error in User Role Mapping is "+err1); 
       //      })

       // }).catch(error=>{
       //  res.send("Error in Role Find");
       //  logger.error("Error in Role find is "+error);
       // })
