// npm install rewire
// npm install
// npm test
var rewire = require('rewire');
var app = rewire('../src/demo.js');


var operation = app.__get__('operation'); 

// Resultados esperados
test('Adding 3 and 0 => 3', () => {
  expect(operation("+", 3, 0)).toEqual(3);
});

test('Subtracting 2 and 2 => 0', () => {
  expect(operation("-", 2, 2)).toEqual(0);
});

test('Subtracting 1 and -1 => 2', () => {
  expect(operation("-", 1, -1)).toEqual(2);
});

test('Adding 100 and -1000 => -900', () => {
  expect(operation("+", 100, -1000)).toEqual(-900);
});

test('Adding 100 and -900 => !800', () => {
  expect(operation("+", 100, -900)).not.toEqual(800);
});


// Resultados no esperados

test('Error Op => undefined', () => {
  expect(operation("*", 100, -1000)).toEqual(undefined);
});

test('Error number1 => undefined', () => {
  expect(operation("+", "a", 1000)).toEqual(undefined);
});

test('Error number2 => undefined', () => {
  expect(operation("+", 2, "test")).toEqual(undefined);
});

test('Error in all parameters => undefined', () => {
  expect(operation("/", "demo", "test")).toEqual(undefined);
});


