# Clean Code Times

[![codecov](https://img.shields.io/codecov/c/github/josegoval/clean-code-milliseconds?style=for-the-badge)](https://codecov.io/gh/josegoval/clean-code-milliseconds)
![npm bundle size](https://img.shields.io/bundlephobia/min/clean-code-milliseconds?style=for-the-badge)
[![https://nodei.co/npm/clean-code-milliseconds.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/clean-code-milliseconds.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/clean-code-milliseconds)

`clean-code-milliseconds` is a JS and TS library that help you write clean code milliseconds.

**Feel like supporting this free plugin?**

<a href="https://www.buymeacoffee.com/josegoval" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

Are you bored of complex mathematics to figure out what a person wants to express in milliseconds? Make it easy with pre-built constants and converters.

**Table of Contents**

- [Installation](#installation)
- [Example usage](#example-usage)
- [Functions](#functions)
- [Constants](#constants)

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

## Functions

- `getSecondsInMs`
- `getMinutesInMs`
- `getHoursInMs`
- `getDaysInMs`
- `getWeeksInMs`
- `getYearsInMs`: By default it counts 365 days, however, if you want to add a leap year add `{ isLeapYear: true }` to the second argument.

## Constants

Let intellisense guide you <(￣︶￣)>

**Seconds**
- `A_SECOND_IN_MS`
- `TWO_SECONDS_IN_MS`
- `THREE_SECONDS_IN_MS`
- `FOUR_SECONDS_IN_MS`
- `FIVE_SECONDS_IN_MS`
- `SIX_SECONDS_IN_MS`
- `SEVEN_SECONDS_IN_MS`
- `EIGHT_SECONDS_IN_MS`
- `NINE_SECONDS_IN_MS`
- `TEN_SECONDS_IN_MS`
- `THIRTY_SECONDS_IN_MS`

**Minutes**
- `A_MINUTE_IN_MS`
- `TWO_MINUTES_IN_MS`
- `THREE_MINUTES_IN_MS`
- `FOUR_MINUTES_IN_MS`
- `FIVE_MINUTES_IN_MS`
- `SIX_MINUTES_IN_MS`
- `SEVEN_MINUTES_IN_MS`
- `EIGHT_MINUTES_IN_MS`
- `NINE_MINUTES_IN_MS`
- `TEN_MINUTES_IN_MS`
- `FIFTEEN_MINUTES_IN_MS`
- `THIRTY_MINUTES_IN_MS`
- `FORTY_FIVE_MINUTES_IN_MS`

**Hours**
- `A_HOUR_IN_MS`
- `TWO_HOURS_IN_MS`
- `THREE_HOURS_IN_MS`
- `FOUR_HOURS_IN_MS`
- `FIVE_HOURS_IN_MS`
- `SIX_HOURS_IN_MS`
- `SEVEN_HOURS_IN_MS`
- `EIGHT_HOURS_IN_MS`
- `NINE_HOURS_IN_MS`
- `TEN_HOURS_IN_MS`

**Days**
- `A_DAY_IN_MS`
- `TWO_DAYS_IN_MS`
- `THREE_DAYS_IN_MS`
- `FOUR_DAYS_IN_MS`
- `FIVE_DAYS_IN_MS`
- `SIX_DAYS_IN_MS`
- `SEVEN_DAYS_IN_MS`
- `EIGHT_DAYS_IN_MS`
- `NINE_DAYS_IN_MS`
- `TEN_DAYS_IN_MS`

**Weeks**
- `A_WEEK_IN_MS`
- `TWO_WEEK_IN_MS`
- `THREE_WEEK_IN_MS`

**Years**
- `A_YEAR_IN_MS`
- `TWO_YEARS_IN_MS`
- `THREE_YEARS_IN_MS`
- `FOUR_YEARS_IN_MS`
- `FIVE_YEARS_IN_MS`
- `SIX_YEARS_IN_MS`
- `SEVEN_YEARS_IN_MS`
- `EIGHT_YEARS_IN_MS`
- `NINE_YEARS_IN_MS`
- `TEN_YEARS_IN_MS`


