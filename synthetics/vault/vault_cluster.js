var assert = require('assert');
$http.get('http://x.x.x.x:8200/v1/sys/health',
// Callback
function (err, response, body) {
    assert.ok(response.statusCode === 200 || response.statusCode === 429, 'Expected a 200 or 429 response');
    var data = body;
    console.log(JSON.parse(data).sealed);
    assert.equal(JSON.parse(data).sealed, false, 'Expected sealed: false');
}
);

