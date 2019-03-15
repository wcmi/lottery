var  http=require('http');

http.createServer(function(request,response){
  response.writeHead(200,{'Content-Type':'test/plain'});
  response.end('<html>helloword</html>');
}).listen(8888);

console.log('server run  http://');
