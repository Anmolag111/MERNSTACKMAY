// Chalk module
const chalk = require("chalk");
console.log(chalk.red("Hello world!"));
console.log(chalk.green("Hello world!"));
console.log(chalk.yellow(chalk.bold("Hello world!")));

// Cron module
let CronJob = require("cron").CronJob;
let pattern = "26 14 * * *";
var job = new CronJob(pattern, () => {
  console.log("Send mail to customer!");
});
job.start();
