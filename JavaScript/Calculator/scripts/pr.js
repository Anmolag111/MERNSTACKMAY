var  arr=[10,20,30,40,30,70,80,30,60];
var arr1=arr.filter(ele=>{
    if(ele!=30) return true;
})
console.log(arr1);