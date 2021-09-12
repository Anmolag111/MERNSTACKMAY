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