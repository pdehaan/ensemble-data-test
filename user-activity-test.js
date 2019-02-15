const { lastModified } = require("./index");
const dashboards = require("./user-activity.json");

async function main() {
  for (const dashboardUrl of dashboards) {
    const dashboardAge = await lastModified(dashboardUrl);
    console.log(`[${dashboardAge}] ${dashboardUrl}`);
  }
}

main();
