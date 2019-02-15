const {lastModified} = require("./index");

async function main(url) {
  const age = await lastModified(url);
  const days = parseInt(age, 10);
  console.log(age);
  if (days < -7) {
    process.exitCode = 1;
  }
}

const args = process.argv;

main(args[2]);
