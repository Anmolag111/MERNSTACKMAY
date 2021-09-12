const express = require('express');
const Role = require('../models/roles');
const route = express.Router();

route.post('/addrole',(request,response)=>{
    const Role=require('../models/roles')
    const name=request.body.name;
    const descr=request.body.descr;
    const roleObject=new Role(name,descr);
    const roleOperations=require('../db/helper/rolecrud');
    var promise=roleOperations.add(roleObject);
    promise.then(data=>{
        response.json("Role added successfully");
    }).catch(err=>{
        response.json("Error during role add");
    })
});
module.exports=route;