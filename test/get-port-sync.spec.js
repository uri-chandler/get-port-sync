var should      = require('chai').should();
var getPortSync = require('../index.js');

describe('get-port-sync', () => {
    it('synchronously gets a free port', () => {
        var freePort = getPortSync();

        should.exist(freePort);
        freePort.should.be.a('number');
    });
});