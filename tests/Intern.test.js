const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "Columbia";
  const e = new Intern("Mug", 1, "sprinkles@shop.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Mug", 1, "sprinkles@shop.com", "Columbia");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Columbia";
  const e = new Intern("Mug", 1, "sprinkles@shop.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});