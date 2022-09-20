import getLanguage from "../getlanguage";

describe("getLanguage", () => {
  it("should return the language", () => {
    expect(getLanguage()).toBe("en");
  });
});
