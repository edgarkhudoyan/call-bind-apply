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

foo.call(obj, hello1, hello2, hello3);
foo.fakeCall(obj, world1, world2, world3);
