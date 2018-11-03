const http = require('http');
const fs = require('fs');
const host = '127.0.0.1';
const port = 3000;


fs.readFile('index.html', function(err, html){
    if (err) {
        throw err;
    }
    const server = http.createServer(function(req, res) {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html')
        res.write(html);
        res.end();
    });
    server.listen(port, host, function(){
        console.log("Server started on port " + port)
    })
})
