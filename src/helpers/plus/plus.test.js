import { plus } from "./plus";

describe("plus", () => {
  test("positive", () => {
    expect(plus(5, 5)).toBe(10);
  });

  test("negative", () => {
    expect(plus(5, -5)).toBe(0);
  });
});
