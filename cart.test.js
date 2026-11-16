const { calculateTotal } = require('./cart');

test('tühi ostukorv maksab 0 eurot', () => {
  expect(calculateTotal([])).toBe(0);
});

test('üks toode koos saatmiskuluga', () => {
  expect(calculateTotal([{ price: 20, qty: 2 }])).toBe(45);
});

test('30 + 50 + 5', () => {
  expect(calculateTotal([{ price: 10, qty: 3 }, { price: 25, qty: 2 }])).toBe(85);
});

test('100 − 10%, tasuta saatmine', () => {
  expect(calculateTotal([{ price: 100, qty: 1 }], "STUDENT10")).toBe(90);
});

test('99 + 5', () => {
  expect(calculateTotal([{ price: 99, qty: 1 }])).toBe(104);
});

test('täpselt piiril, tasuta saatmine', () => {
  expect(calculateTotal([{ price: 100, qty: 1 }])).toBe(100);
});

test('annab vea, kui items ei ole massiiv', () => {
  expect(() => calculateTotal('abc')).toThrow();
});