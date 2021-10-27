import { getDateTime, getSportData, getStatus } from ".";

describe("Testing of getSportData function", () => {
  it("Test name in getSportData function", () => {
    const { name } = getSportData("politics");
    expect(name).toBe("Politics");
  });
  it("Test color in getSportData function", () => {
    const { color } = getSportData("football_match");
    expect(color).toBe("#0dcaf0");
  });
});

describe("Testing of getStatus function", () => {
  it("Test live getStatus function", () => {
    const output = getStatus("live");
    expect(output).toBe("🔴 live");
  });
  it("Test others getStatus function", () => {
    const output = getStatus("asfdkjbaskfbskfjbd");
    expect(output).toBe("🟡 asfdkjbaskfbskfjbd");
  });
});

describe("Testing of getDateTime function", () => {
  it("Test getDateTime function", () => {
    const isoString = new Date().toISOString();
    const { today } = getDateTime(isoString);
    expect(today).toBe(true);
  });
});
