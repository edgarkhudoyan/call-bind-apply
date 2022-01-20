// Implement fake Call function
function foo(a, b, c) {
  return this.name;
}

const obj = {
  name: 'John',
};

Function.prototype.fakeCall = function fakeCall(arg, ...rest) {
  arg._function = this;
  return arg._function(...rest);
};

foo.call(obj, 1, 2, 3);
foo.fakeCall(obj, 1, 2, 3);
