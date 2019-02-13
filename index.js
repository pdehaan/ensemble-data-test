const axios = require("axios");
const ms = require("ms");

async function main(uri) {
  const res = await axios.get(uri);
  const latestDate = new Date(res.data.data.populations.default.pop().x);
  console.log(ms(latestDate - Date.now()));
}

main("https://data.firefox.com/datasets/desktop/user-activity/Worldwide/YAU");
