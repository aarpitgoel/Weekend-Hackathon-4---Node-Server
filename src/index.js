var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  if(req.url === "./welcome"){
    res.status(200).write('Welcome to Dominos!'); 
    res.end();
  }
  if(req.url === "./contact"){
     const respo = {
          phone: '18602100000',
          email: 'guestcaredominos@jublfood.com'
     }
     res.status(200).send(respo); 
    res.end();
  }
  if(req.url === './'){
        res.status(404);
        res.send();
  }
}

httpServer.listen(8081);

module.exports = httpServer;
