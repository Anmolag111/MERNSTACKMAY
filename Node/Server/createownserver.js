const http=require('http');

// const server=http.createServer(handleRequestResponse);
// function handleRequestResponse(request,response){
//     console.log("Server Called");
//     response.write("Hello I am server");
//     response.end();
// }
const isStaticFile = require('./utils/static');
const server = http.createServer((req, res)=>{
    const fileReader= require('./utils/filereader');
   // console.log('Server Accept the request ',req.url);
    res.setHeader("Content-Type","text/html");
    let url = req.url;
    let method= req.method;
    console.log("url is .....",url);
     // / refers to index.html (if req is for index.html)
    if(url=='/'){
        url ='/index.html';
    }
    // check if the file is static eg html ico css jpg 
    if(isStaticFile(url)){
        fileReader(url,res);
    }
    
    else
    if(method=='GET' && url.startsWith('/login')){
        const userOperations = require('./helper/user');
        const urlObj = require('url');
        // url into key vale pair 
        //userid ""
        //pwd ""
        const obj = urlObj.parse(url,true);
        //console.log('obj ',obj);
        let userid = obj.query.userid;
        let pwd = obj.query.pwd;
        let msg = userOperations.login(userid, pwd);
        res.write(msg);
        res.end();
    }
    else
    if(method=='POST' && url.startsWith('/login')){
        const userOperations = require('./helper/user');
        var data = '';
        // event to clloect data from body in post method
        req.on('data',chunk=>{
            data+=chunk;
        });
        // when data is over 
        // parse to convert string to object(key - value)
        req.on('end',()=>{
            //console.log('Data is in POST ',data);
            const qs = require('querystring');
            let obj = qs.parse(data);
           // console.log('QS PArse Object ',obj);
            let userid = obj.userid;
        let pwd = obj.pwd;
        let msg = userOperations.login(userid, pwd);
        res.write(msg);
        res.end();
        });

    }
    /*if(req.url=='/favicon.ico'){
        res.write('Fav');
        res.end();
    }
    else
    if(req.url=='/'){
        fileReader('/index.html',res);
    }*/
    else{
        console.log("Request url is",req.url);
        fileReader(req.url,res);
    }
    
    //res.write('<h1>Hello User I am Server</h1>');
    //res.end();
})
 server.listen(process.env.PORT || 1234,()=>{
    console.log('Server Started....... ',server.address().port);
})