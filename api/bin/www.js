var app = require('../app');
var http = require('http');


// Get port and store in Express.
var port = normalisePort(process.env.PORT || '8090');
app.set('port', port);

// Create HTTP server.
var server = http.createServer(app);

// Listen on provided port, on all network interfaces
server.listen(port);

// Normalise a port into number, string or false.
function normalisePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}