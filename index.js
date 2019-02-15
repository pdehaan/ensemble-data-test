const axios = require("axios");
const ms = require("ms");

async function lastModified(
  uri = "https://data.firefox.com/datasets/desktop/user-activity/Worldwide/YAU"
) {
  const res = await axios.get(uri);
  const latestDate = new Date(res.data.data.populations.default.pop().x);
  return ms(latestDate - Date.now());
}

exports.lastModified = lastModified;
