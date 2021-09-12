const express = require('express');
const Right = require('../models/rights');
const route = express.Router();

route.post('/addright',(request,response)=>{
    const name=request.body.name;
    const descr=request.body.descr;
    const screenurl=request.body.screenurl;
    const rightObject=new  Right(name,descr,screenurl);
    const rightOperations=require('../db/helper/rightcrud');
    var promise=rightOperations.add(rightObject);
    promise.then(data=>{
        response.json("Right added successfully");
    }).catch(err=>{
        response.json("Error during right add");
        console.log(err);
    })
});
module.exports=route;