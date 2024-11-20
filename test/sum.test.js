import { sum } from "../src/sum.js";

test("sum (2,3) must be 5", () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
});
