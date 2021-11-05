let sayHello = function(str) {
  let name = str || 'John Doe';
  console.log('Hello, ' + name + '!');
};

sayHello('Tom');
sayHello();