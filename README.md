# ensemble-data-test

Test how fresh the dashboard data is.

## Installation

```sh
$ npm i pdehaan/ensemble-data-test -S
```

## Usage

### CLI

```sh
$ npx pdehaan/ensemble-data-test "https://data.firefox.com/datasets/desktop/user-activity/Worldwide/YAU"
```

### API

```js
// $ npm i pdehaan/ensemble-data-test -S
const { lastModified } = require("ensemble-data-test");

async function main() {
  const res = await lastModified("https://data.firefox.com/datasets/desktop/user-activity/Worldwide/YAU");
  console.log(res); // -7d
  console.log(parseInt(res, 10)); // -7
}

main();
```
