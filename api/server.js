/*****************IMPORTS****************/
const express = require('express');
const helmet = require('helmet'); 
const cors = require('cors');  
const session = require('express-session')
const KnexSessionStorage = require('connect-session-knex')(session);
const knexConnection = require('../data/db-config.js')
const configMiddleWare = require('./configure-middleware.js')
//routers
const apiRouter = require('./api-router.js');


//server
const server = express(); 

const sessionConfiguration = {
    name: 'rivendell', 
    secret: process.env.COOKIE_SECRET || 'is it secret? is it safe?', 
    cookie: {
        maxAge: 1000 * 60 * 60, //valid for 1 hour (in milliseconds)
        secure: process.env.NODE_ENV === 'development' ? false : true, 
        httpOnly : true, //prevent client js code from access to a cookie
    }, 
    resave: false, 
    saveUninitialized: true, 
    store: new KnexSessionStorage({
        knex: knexConnection, 
        clearInterval: 1000 * 60 * 10, 
        tablename: 'accounts_session', 
        sidfieldname: 'id', 
        createTable:true
    })
}
configMiddleWare(server); 

server.use(helmet()); 
server.use(express.json())
server.use(cors())
server.use(session(sessionConfiguration))

server.use('/api', apiRouter)

server.get('/', (req, res) => {
   res.json({api: "up", session: req.session})
})
module.exports = server; 