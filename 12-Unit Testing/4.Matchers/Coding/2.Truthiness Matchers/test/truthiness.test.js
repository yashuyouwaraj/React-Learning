import { expect, it } from "vitest";

it("toBeTruthy matcher", () => {
  const value = 1;
  expect(value).toBeTruthy();
});

// ---------------------------------

it("toBeFalsy matcher", () => {
  const value = NaN;
  expect(value).toBeFalsy();
});