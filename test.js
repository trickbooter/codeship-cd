var test = require('tape');
var server = require('./server');

test('up', function (t) {
  t.plan(2);
  
  server.inject({
    method: 'GET',
    url: '/'
  }, function (res) {
    t.equal(res.statusCode, 200);
    t.equal(res.result, 'Hello, world!!!');
  });
});
