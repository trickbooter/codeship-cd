
var test = require('tape');
var app = require('./myapp');

test ('up', function (t) {
  var req = {
    method: 'GET',
    url: '/'
  };


  app.inject(req, function (res) {
    t.equal(res.statusCode, 200);
    t.equal(res.result, 'Hello, World!');
    t.end();
  });
});