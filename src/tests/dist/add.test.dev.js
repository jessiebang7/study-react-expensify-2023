"use strict";

var add = function add(a, b) {
  return a + b;
};

var generateGreeting = function generateGreeting() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
  return "Hello ".concat(name, "!");
};

test('should add two numbers', function () {
  var result = add(3, 4); // if(result !==7) throw new Error(`You added 4 and 3. The result was ${result}, Expect 7`) 

  expect(result).toBe(7);
});
test('should print greeting', function () {
  var result = generateGreeting('Mike');
  expect(result).toBe("Hello Mike!");
});
test('should print greeting for no name', function () {
  var result = generateGreeting();
  expect(result).toBe("Hello Anonymous!");
});