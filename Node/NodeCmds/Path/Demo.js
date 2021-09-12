const fs = require("fs");
const path = require("path");

// use path module do not harcode your paths for file handling

// normalize for switching between directories
const parent = path.normalize(__dirname + "/..");
console.log("parent path is", parent);

// joining two paths
const filePath = path.join(parent, "/shares.txt");
fs.readFile(filePath, (error, data) => {
  if (error) {
    return console.error("Error reading file", error);
  }
  console.log("Content is :\n" + data);
});

// dirname() to show directory name of filepath
console.log("Directory path is ", path.dirname(filePath));

// basename() to show file name with extension
console.log("file name with extension is ", path.basename(filePath));

// pass an argument of extension in basename() to show file without extension
console.log("file name without extension is ", path.basename(filePath, ".txt"));

// to check OS separator used by client
console.log("OS Separator is  ", path.sep);

// to check OS Delimiter used by client
console.log("OS Delimiter is ", path.delimiter);

// convert filepath to js object
var fileObject = path.parse(filePath);
console.log("fileObject is ", fileObject);

// convert js object to filepath again
var systemFilePath = path.format(fileObject);
console.log("file path is ", systemFilePath);
