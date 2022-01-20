// Implement bind function
const user = {
  name: 'John',
};

function foo(a, b) {
  return `name: ${this.name}, a: ${a}, b: ${b}`;
}

function fakeBind(foo, context, ...rest) {
  return function (...args) {
    return foo.call(context, ...rest.concat(args));
  };
}

console.log(fakeBind(foo, user, '5', 'minutes'));
