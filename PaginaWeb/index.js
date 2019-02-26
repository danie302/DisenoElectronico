const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const express = require("express");
const path = require('path');
const app = express()
let d;

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  d = msg;
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/map',function(req,res) {
  res.sendFile(path.join(__dirname+'/public/map.html'));
});

app.get("/coord", (req, res) => {
  res.json(`${d}`) 
})

app.listen(4000, () => {
  console.log("Server on");
})

server.bind(4001);