// Implement new constructor
function User(name) {
  this.name = name;

  return 12;
}

function fakeNew(construct, ...rest) {
  const _o = {}; // 1
  _o.__proto__ = construct.prototype; // 2
  const returndedValue = construct.apply(_o, rest); // 3
  if (typeof returndedValue === 'object') {
    return returndedValue;
  } // 4
  return _o;
}

const user = new User('Vrezh');
const user1 = fakeNew(User, 'Vrezh');

console.group('new');
console.log(user);
console.log(user.__proto__ === User.prototype);
console.groupEnd();

console.group('fake new');
console.log(user1);
console.log(user1.__proto__ === User.prototype);
console.groupEnd();
