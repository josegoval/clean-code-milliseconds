# Clean Code Times

[![codecov](https://img.shields.io/codecov/c/github/josegoval/clean-code-milliseconds?style=for-the-badge)](https://codecov.io/gh/josegoval/clean-code-milliseconds)
![npm bundle size](https://img.shields.io/bundlephobia/min/clean-code-milliseconds?style=for-the-badge)
[![https://nodei.co/npm/clean-code-milliseconds.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/clean-code-milliseconds.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/clean-code-milliseconds)

`clean-code-milliseconds` is a JS and TS library that help you write clean code milliseconds.

**Feel like supporting this free plugin?**

<a href="https://www.buymeacoffee.com/josegoval" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

**Table of Contents**

- [Installation](#installation)
- [Example usage](#example-usage)

## Installation

```bash
npm install --save clean-code-milliseconds
```

or

```bash
yarn add clean-code-milliseconds
```

## Example usage

Import and use as follow with ES6 syntax:

```ts
import { getDaysInMS, FIVE_DAYS_IN_MS } from "clean-code-milliseconds";

console.log(getDaysInMs(5)) 
console.log(FIVE_DAYS_IN_MS) 
```

For node environments without ES6 use `require` as follows:

```ts

const { getDaysInMS, FIVE_DAYS_IN_MS } = require("clean-code-milliseconds")

console.log(getDaysInMs(5)) 
console.log(FIVE_DAYS_IN_MS) 
```