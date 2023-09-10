import { A_DAY_IN_MS, A_MINUTE_IN_MS, A_SECOND_IN_MS, A_WEEK_IN_MS, A_YEAR_IN_MS, EIGHT_DAYS_IN_MS, EIGHT_MINUTES_IN_MS, EIGHT_SECONDS_IN_MS, EIGHT_YEARS_IN_MS, FIFTEEN_MINUTES_IN_MS, FIVE_DAYS_IN_MS, FIVE_MINUTES_IN_MS, FIVE_SECONDS_IN_MS, FIVE_YEARS_IN_MS, FORTY_FIVE_MINUTES_IN_MS, FOUR_DAYS_IN_MS, FOUR_MINUTES_IN_MS, FOUR_SECONDS_IN_MS, FOUR_YEARS_IN_MS, NINE_DAYS_IN_MS, NINE_MINUTES_IN_MS, NINE_SECONDS_IN_MS, NINE_YEARS_IN_MS, SEVEN_DAYS_IN_MS, SEVEN_MINUTES_IN_MS, SEVEN_SECONDS_IN_MS, SEVEN_YEARS_IN_MS, SIX_DAYS_IN_MS, SIX_MINUTES_IN_MS, SIX_SECONDS_IN_MS, SIX_YEARS_IN_MS, TEN_DAYS_IN_MS, TEN_MINUTES_IN_MS, TEN_SECONDS_IN_MS, TEN_YEARS_IN_MS, THIRTY_MINUTES_IN_MS, THIRTY_SECONDS_IN_MS, THREE_DAYS_IN_MS, THREE_MINUTES_IN_MS, THREE_SECONDS_IN_MS, THREE_WEEK_IN_MS, THREE_YEARS_IN_MS, TWO_DAYS_IN_MS, TWO_MINUTES_IN_MS, TWO_SECONDS_IN_MS, TWO_WEEK_IN_MS, TWO_YEARS_IN_MS } from "./constants";
import { getDaysInMs, getHoursInMs } from "./converters";

describe("Millisecond module", () => {
	it("converts seconds", ()=> {
		const aSecondInMS = 1000;
		expect(A_SECOND_IN_MS).toBe(aSecondInMS);
		expect(TWO_SECONDS_IN_MS).toBe(aSecondInMS * 2);
		expect(THREE_SECONDS_IN_MS).toBe(aSecondInMS * 3);
		expect(FOUR_SECONDS_IN_MS).toBe(aSecondInMS * 4);
		expect(FIVE_SECONDS_IN_MS).toBe(aSecondInMS * 5);
		expect(SIX_SECONDS_IN_MS).toBe(aSecondInMS * 6);
		expect(SEVEN_SECONDS_IN_MS).toBe(aSecondInMS * 7);
		expect(EIGHT_SECONDS_IN_MS).toBe(aSecondInMS * 8);
		expect(NINE_SECONDS_IN_MS).toBe(aSecondInMS * 9);
		expect(TEN_SECONDS_IN_MS).toBe(aSecondInMS * 10);
		expect(THIRTY_SECONDS_IN_MS).toBe(aSecondInMS * 30);
	});

	it("converts minutes", ()=> {
		expect(A_MINUTE_IN_MS).toBe(A_MINUTE_IN_MS);
		expect(TWO_MINUTES_IN_MS).toBe(A_MINUTE_IN_MS * 2);
		expect(THREE_MINUTES_IN_MS).toBe(A_MINUTE_IN_MS * 3);
		expect(FOUR_MINUTES_IN_MS).toBe(A_MINUTE_IN_MS * 4);
		expect(FIVE_MINUTES_IN_MS).toBe(A_MINUTE_IN_MS * 5);
		expect(SIX_MINUTES_IN_MS).toBe(A_MINUTE_IN_MS * 6);
		expect(SEVEN_MINUTES_IN_MS).toBe(A_MINUTE_IN_MS * 7);
		expect(EIGHT_MINUTES_IN_MS).toBe(A_MINUTE_IN_MS * 8);
		expect(NINE_MINUTES_IN_MS).toBe(A_MINUTE_IN_MS * 9);
		expect(TEN_MINUTES_IN_MS).toBe(A_MINUTE_IN_MS * 10);
		expect(FIFTEEN_MINUTES_IN_MS).toBe(A_MINUTE_IN_MS * 15);
		expect(THIRTY_MINUTES_IN_MS).toBe(A_MINUTE_IN_MS * 30);
		expect(FORTY_FIVE_MINUTES_IN_MS).toBe(A_MINUTE_IN_MS * 45);
	});

	it("converts days", ()=> {
		const aDayInMs = getHoursInMs(24);
		expect(A_DAY_IN_MS).toBe(aDayInMs);
		expect(TWO_DAYS_IN_MS).toBe(aDayInMs * 2);
		expect(THREE_DAYS_IN_MS).toBe(aDayInMs * 3);
		expect(FOUR_DAYS_IN_MS).toBe(aDayInMs * 4);
		expect(FIVE_DAYS_IN_MS).toBe(aDayInMs * 5);
		expect(SIX_DAYS_IN_MS).toBe(aDayInMs * 6);
		expect(SEVEN_DAYS_IN_MS).toBe(aDayInMs * 7);
		expect(EIGHT_DAYS_IN_MS).toBe(aDayInMs * 8);
		expect(NINE_DAYS_IN_MS).toBe(aDayInMs * 9);
		expect(TEN_DAYS_IN_MS).toBe(aDayInMs * 10);
	});

	it("converts weeks", ()=> {
		expect(A_WEEK_IN_MS).toBe(SEVEN_DAYS_IN_MS);
		expect(TWO_WEEK_IN_MS).toBe(SEVEN_DAYS_IN_MS * 2);
		expect(THREE_WEEK_IN_MS).toBe(SEVEN_DAYS_IN_MS * 3);
	});

	it("converts years", ()=> {
		const aYearInMs = getDaysInMs(365);
		expect(A_YEAR_IN_MS).toBe(aYearInMs);
		expect(TWO_YEARS_IN_MS).toBe(aYearInMs * 2);
		expect(THREE_YEARS_IN_MS).toBe(aYearInMs * 3);
		expect(FOUR_YEARS_IN_MS).toBe(aYearInMs * 4);
		expect(FIVE_YEARS_IN_MS).toBe(aYearInMs * 5);
		expect(SIX_YEARS_IN_MS).toBe(aYearInMs * 6);
		expect(SEVEN_YEARS_IN_MS).toBe(aYearInMs * 7);
		expect(EIGHT_YEARS_IN_MS).toBe(aYearInMs * 8);
		expect(NINE_YEARS_IN_MS).toBe(aYearInMs * 9);
		expect(TEN_YEARS_IN_MS).toBe(aYearInMs * 10);
	});
});