import { type GetYearsInMsOptions } from "./types";

export function getSecondsInMs (seconds: number) {
	return seconds * 1000;
}

export function getMinutesInMs (minutes: number) {
	return getSecondsInMs(minutes * 60);
}

export function getHoursInMs (hours: number) {
	return getMinutesInMs(hours * 60);
}

export function getDaysInMs (days: number) {
	return getHoursInMs(days * 24);
}

export function getWeeksInMs (weeks: number) {
	return getDaysInMs(weeks * 7);
}

export function getYearsInMs (years: number, { isLeapYear }: GetYearsInMsOptions = {}) {
	return getDaysInMs(years * (isLeapYear ? 366 : 365));
}
