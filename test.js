const { lastModified } = require("./index");

async function main() {
  const res = await lastModified(
    "https://data.firefox.com/datasets/desktop/user-activity/Worldwide/YAU"
  );
  console.log(res);
  console.log(parseInt(res, 10));
}

main();
