//201-ok,201-created,400-bad response,404-not found,500-internal server error
//const http=require("http");
const http=require("http");
const server=http.createServer((req,res)=>{
  res.writeHead(200,{
  "content-type":'text/plaintext',
  "Server":'node.js'
  })
  res.end("Hello World");

});
port=3005;
server.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})