const fs = require("fs");

// define path of file
const PATH = "./input.json";

// readFile Asynchronous method to read file
fs.readFile(PATH, { encoding: "utf8" }, (error, content) => {
  if (error) {
    return console.error("Encountered Some error ", error);
  }
  console.log("Raw Content of file is ", content);
  //console.log("Content of file is " + content);
});
console.log("end");

 // readFileSync Synchronous method to read File
var content = fs.readFileSync(PATH);
 console.log("Raw Content of file is ", content); 
console.log("Content of file is " + content);

 // Using Streams to read Files can read bigger files also
 var readStream = fs.createReadStream(PATH);

readStream.on("open", () => {
  console.log("Stream is open");
});

 // you can pass second argument as {highWaterMark:10000} to set buffer size
readStream.on("data", (chunk) => {
  console.log("Chunk is ", chunk);
});

readStream.on("end", () => {
  console.log("Stream is End");
});

readStream.on("close", () => {
  console.log("Stream is Close");
});
