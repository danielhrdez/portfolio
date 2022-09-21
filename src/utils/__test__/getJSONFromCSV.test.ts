import getJSONFromCSV from "../getJSONFromCSV";

describe("getJSONFromCSV", () => {
  it("should return an array of objects", () => {
    const csv = 'name,age\nJohn,21\nJane,22';
    const expected = {
      "John": { name: "John", age: "21" },
      "Jane": { name: "Jane", age: "22" },
    };
    expect(getJSONFromCSV(csv)).toEqual(expected);
  });
});
