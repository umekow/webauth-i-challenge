/*****************IMPORTS****************/
const express = require('express'); 
const configMiddleWare = require('./configure-middleware.js')
//routers
const apiRouter = require('./api-router.js');


//server
const server = express(); 

configMiddleWare(server); 

server.use('/api', apiRouter)

server.get('/', (req, res) => {
    res.send('<div><h1>Its Working!</h1><img src="https://media2.giphy.com/media/9K2nFglCAQClO/source.gif" alt="its working"/></div>')
})
module.exports = server; 