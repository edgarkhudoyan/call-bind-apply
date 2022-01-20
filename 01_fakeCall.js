// Implement fake Call function
function foo(a, b, c) {
  return this.name;
}

const user = {
  name: 'John',
};

Function.prototype.fakeCall = function fakeCall(arg, ...rest) {
  arg._function = this;
  return arg._function(...rest);
};

foo.call(user, 1, 2, 3);
foo.fakeCall(user, 5, 6, 7);
