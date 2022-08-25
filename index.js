const http = require('http') ;
const fs = require('fs') ;

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    fs.readFile('index.html',function(err,data){
        if (err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
  }
  else if(req.url === '/About-me'){
    fs.readFile('about.html',function(err,data){
        if (err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
  }
  else if(req.url === '/Contact'){
    fs.readFile('contact.html',function(err,data){
        if (err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
  }
  else{
        fs.readFile('404.html',function(err,data){
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        });
  }

}) ;

server.listen(8080, () => {
  console.log("You're connected to port 8080!");
});
