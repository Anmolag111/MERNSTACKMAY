const express = require('express');
const route = express.Router();

route.post('/addroleright',(request,response)=>{
    const RoleRight=require('../models/roleright')
    const roleid=request.body.roleid;
    const rightid=request.body.rightid;
    const roleRightObject=new RoleRight(roleid,rightid);
    const  roleRightOperations=require('../db/helper/rolerightcrud');
    var promise=roleRightOperations.add(roleRightObject);
    promise.then(data=>{
        response.json(" Role right added successfully");
    }).catch(err=>{
        response.json("Error during user role right");
    })
});
module.exports=route;