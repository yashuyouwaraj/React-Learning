import { describe, it, expect } from "vitest";
import {
  getProperty,
  mergeObjects,
  deepClone,
  deepEqual,
} from "../src/objectUtils";

describe("Object Utilities", () => {
  it("should return the correct property value for a given path", () => {
    const user = {
      name: "Alice",
      address: { city: "Wonderland", zip: "12345" },
    };
    expect(getProperty(user, "name")).toBe("Alice");
    expect(getProperty(user, "address.city")).toBe("Wonderland");
    expect(getProperty(user, "address.zip")).toBe("12345");
    expect(getProperty(user, "address.country")).toBeUndefined();
  });

  it("should correctly merge two objects", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const merged = mergeObjects(obj1, obj2);
    expect(merged).toEqual({ a: 1, b: 3, c: 4 });
  });

  it("should deep clone an object", () => {
    const original = { a: 1, b: { c: 2 } };
    const cloned = deepClone(original);
    cloned.b.c = 3;
    expect(original.b.c).toBe(2);
    expect(cloned.b.c).toBe(3);
  });

  it("should correctly check deep equality between two objects", () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    const obj3 = { a: 1, b: { c: 3 } };

    expect(deepEqual(obj1, obj2)).toBe(true);
    expect(deepEqual(obj1, obj3)).toBe(false);
  });
});
