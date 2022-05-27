var app = require('../app');
var http = require('http');


// Get port and store in Express.
var port = ('8090')
app.set('port', port);

// Create HTTP server.
var server = http.createServer(app);

// Listen on provided port, on all network interfaces
server.listen(port);