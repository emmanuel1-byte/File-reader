const http = require('http');
const fs = require('fs');

const port = 8080;
const hostname = "127.0.0.1";

const file = "text.txt";
const server = http.createServer((req, res)=>{
    /* read file in the server */
    fs.readFile(file, (err, data)=>{
        if(err) throw err;
       res.statusCode = 200;
       res.setHeader('Content-Type', 'text/html');
       res.write(data);
       res.end();
 
       /* delete file after reading */
       fs.unlink(file, (err, result)=>{
        if(err) throw err;
        console.log(result + " was deleted succesfully");
       })
    })
});

server.listen(port, hostname, ()=>{
    console.log(`Server is running on http://${hostname}:${port}/`)
});