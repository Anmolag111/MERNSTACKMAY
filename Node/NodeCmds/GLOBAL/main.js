var a=10;
var b=10;
var c=a+b;
//console.log("Sum is ",c);

// __filename
console.log("current js file is ", __filename);

// __dirname
console.log("current directory of js file is ", __dirname);

//process
process.on('exit',(exitcode)=>{
    console.log(exitcode);
});  // 0 when no error 1 when it gives err

process.on('UncaughtException',(err)=>{
    console.log(err);
}); // works only when error occurs
// events with process object --adviced to use on top as its an event based
// event 'uncaughtException' to catch exceptions on runtime
//show();

console.log("Curent working dir",process.cwd()); // current working dir 

console.log("process arch ",process.arch); // x64

// console.log("process",process); //  whole details 

console.log("process arguments",process.argv); // ist arg is node ki working dir 2nd is file is cwd
var sum=0;
for(let i=2;i<process.argv.length;i++){
    sum+=parseInt(process.argv[i]);
}
console.log("sum is ",sum);

console.log("port is",process.env.PORT || 1234); // port no 

process.stdout.write('Writing using stdout \n'); // write on console no new line same as console.log
//process.kill(); self kill

// stdin to  take input from console
var myData=0;
process.stdin.on('data',(chunk)=>{
    myData+=chunk;
    console.log("Input string is ", myData);
})

// setTimeout function
// setTimeout(() => {
//     console.log("Going to kill");
//     process.kill();
//   }, 5000);
  

