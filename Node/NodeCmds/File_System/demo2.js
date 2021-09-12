const fs=require('fs');
fs.copyFile('./input.json','./output.json',(err)=>{
    if(err){
        console.log("Error is ",err);
    }else{
        console.log("No error "); 
    }
});

// to check file exists or not
fs.exists('./input.json',(exists)=>{
    if(exists){
        console.log("File exists");
    }else{
        console.log("No File exists"); 
    }
})
//delete a file
// fs.unlink('./output.json',(err)=>{
//     if(err){
//        console.log("Error is ",err);
//     }else{
//         console.log("No error "); 
//      }
// })