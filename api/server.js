//imports
const express = require('express'); 
const helmet = require('helmet'); 

//server
const server = express(); 

server.use(express.json()); 
server.use(helmet); 


module.exports = server; 