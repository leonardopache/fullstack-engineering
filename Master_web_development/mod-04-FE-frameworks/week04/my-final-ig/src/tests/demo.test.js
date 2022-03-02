// npm install rewire
// npm install
// npm test
var rewire = require('rewire');
var app = rewire('../components/Spinner.js');

var spinner = app.__get__('Spinner'); 

test('Adding 3 and 0 => 3', () => {
    expect(spinner()).not.toEqual('');
  });