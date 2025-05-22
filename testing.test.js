const { sum } = require("./testing");
const { capitalise } = require("./testing");
const { reverseString } = require("./testing");
const { calculator } = require("./testing");
const { caesarCipher } = require("./testing");
const {analyzeArray} = require("./testing");

test("adds 1 + 2 to equal 3.", () => {
  expect(sum(1, 2)).toBe(3);
});

test("capitalise abc as Abc.", () => {
  expect(capitalise("abc")).toMatch("Abc");
});

test("reverse string 'abcde' as 'edcba'.", () => {
  expect(reverseString("abcde")).toMatch("edcba");
});

test("add 15 and 5 to get 20.", () => {
  expect(calculator().add(15, 5)).toBe(20);
});

test("subtract 15 and 5 to get 10.", () => {
  expect(calculator().subtract(15, 5)).toBe(10);
});


test("multiply 15 by 5 to get 65.", () => {
  expect(calculator().multiply(15, 5)).toBe(75);
});

test("divide 15 by 5 to get 3.", () => {
  expect(calculator().divide(15, 5)).toBe(3);
});

test("caesar cipher 'Hello, World!', 3' as 'Khoor, Zruog!'.", () => {
  expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
});

test("caesar cipher 'HeLLo', 3 as 'KhOOr'.", () => {
  expect(caesarCipher("HeLLo", 3)).toMatch("KhOOr");
});

test("average to be 2.5", () => {
  expect(analyzeArray([1,2,3]).average).toBe(2);
});

test("minimum value to be 1", () => {
  expect(analyzeArray([1,2,3,4]).min).toBe(1);
});

test("maximum value to be 1", () => {
  expect(analyzeArray([1,2,3,4]).max).toBe(4);
});

test("length to be 4", () => {
  expect(analyzeArray([1,2,3,4]).length).toBe(4);
});
