const fs = require("fs");

//path for file
const PATH = "./input.json";

// copy files without Streams
// fs.readFile(PATH, (error, content) => {
//   if (error) {
//     return console.error("Error encountered while reading file", error);
//   }
//   fs.writeFile("./output.json", content, () => console.log("Copy Complete!"));
// });

// copy files with Streams
const readStream = fs.createReadStream(PATH);
const writeStream = fs.createWriteStream("./output.json");

// Traditional way
readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});
// readStream.on("end", () => {
//   console.log("Copy Done");
// });

// // shorthand syntax
// readStream.pipe(writeStream);
