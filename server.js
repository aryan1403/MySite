var http = require('http'); // Importing the http package
var fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('index.html', (err, data) => {
    res.end(data.toString());
  })
}).listen(process.env.PORT || 5000);
