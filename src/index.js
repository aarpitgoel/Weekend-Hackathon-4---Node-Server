var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  if(req.url === "/welcome"){
    response.statusCode = 200;
    res.write('Welcome to Dominos!');
    res.end();
  }
  if(req.url === "/contact"){
     const respo = {
          phone: '18602100000',
          email: 'guestcaredominos@jublfood.com'
     }
    response.statusCode = 200;
    res.send(respo);
    res.end();
  }
  if(req.url === './'){
       response.statusCode = 404;
        res.end();
  }
}

httpServer.listen(8081);

module.exports = httpServer;
