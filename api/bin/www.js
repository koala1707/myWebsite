var app = require('../app');
var http = require('http');


// Get port and store in Express.
var port = ('8090')
app.set('port', port);

// Create HTTP server.
var server = http.createServer(app);

// Listen on provided port, on all network interfaces
// server.listen(port);
server.listen(process.env.PORT || 8090, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env)
})