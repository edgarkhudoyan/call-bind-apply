// Implement bind function
const user = {
  name: 'John',
};

function foo(a, b) {
  return `name: ${this.name}, a: ${a}, b: {b}`;
}
