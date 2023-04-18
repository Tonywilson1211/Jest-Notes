/**
 * @jest-environment jsdom
 */

const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
      test("should return 42 for 20 + 22", () => {
        expect(addition(20, 22)).toBe(42);
        })
    })
});
      
      /* 
        test("should return 0 for no parameters", () => {
        expect(addition()).toBe(0);
      });
      test("should throw an error for missing parameter", () => {
        expect(() => addition(5)).toThrow("Missing parameter");
      });
      test("should return 'hello world' for 'hello' + ' world'", () => {
        expect(addition("hello", " world")).toBe("hello world");
      });
      test("should return null for null parameters", () => {
        expect(addition(null, null)).toBeNull();
      });
      test("should return null for null as first parameter", () => {
        expect(addition(null, 5)).toBeNull();
      });
      test("should return null for null as second parameter", () => {
        expect(addition(5, null)).toBeNull();
      });
      test("should return undefined for undefined parameter", () => {
        expect(addition(undefined)).toBeUndefined();
      });
      test("should return 3.14 for 1.57 + 1.57", () => {
        expect(addition(1.57, 1.57)).toBeCloseTo(3.14);
      });
      test("should return -5 for -10 + 5", () => {
        expect(addition(-10, 5)).toBe(-5);
      });
    });
  });
  */ 
describe("Calculator", () => {
    describe("Subtraction function", () => {
        
        })})

describe("Calculator", () => {
    describe("Multiply function", () => {

    })
});
describe("Calculator", () => {
    describe("Division function", () => {

    })
});
