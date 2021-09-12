// OS module for getting low level system details
const os = require("os");

// to check the platform of the user machine
console.log(os.platform());

// to check the mahine architecture
console.log(os.arch());

// to check the os type of user's machine
console.log(os.type());

// to get the release version of the os
console.log(os.release());

// to find the userinfo from the machine
console.log(os.userInfo());

// to fnd the number of cpu's
console.log(os.cpus());

// to find total freememory avaailable in system
console.log(os.freemem());

// to find home directory for a user
console.log(os.homedir());

// to get networkInterface for a user
console.log(os.networkInterfaces());

// to get user total memory
console.log(os.totalmem());