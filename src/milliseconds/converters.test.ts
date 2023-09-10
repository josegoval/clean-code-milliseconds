import { getDaysInMs, getYearsInMs } from "./converters";

describe("Converters module", () => {
	it("converts leap years", ()=> {
		expect(getYearsInMs(3, { isLeapYear: true })).toBe(getDaysInMs(366) * 3);
	});

});