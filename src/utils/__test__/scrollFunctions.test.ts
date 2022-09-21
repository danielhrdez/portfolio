import { enableScroll, disableScroll } from "../scrollFunctions";

describe("scrollFunctions", () => {
  it("should return an object with enableScroll", () => {
    expect(enableScroll).toBeInstanceOf(Function);
  });

  it("should return an object with disableScroll", () => {
    expect(disableScroll).toBeInstanceOf(Function);
  });
});
