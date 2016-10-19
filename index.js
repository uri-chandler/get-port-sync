var getPort = require('get-port');
var deasync = require('deasync');

module.exports = () => {
    let isDone    = false;
    let freeport  = null;
    let error     = null;

    getPort()
        .then(port => {
            isDone   = true;
            freeport = port;
        })
        .catch(err => {
            isDone = true;
            error  = err;
        });

    // wait until we're done'
    deasync.loopWhile(() => !isDone);

    if (error) { throw  error    }
    else       { return freeport }
};