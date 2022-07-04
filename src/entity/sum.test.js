const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 10 + 10 to equal 20', () => {
    expect(sum(10, 10)).toBe(20);
});

test('adds 5 + 5 to equal 10', () => {
    expect(sum(5, 5)).toBe(10);
});

test('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
});

test('adds 3 + 3 to equal 6', () => {
    expect(sum(1, 2)).toBe(3);
});