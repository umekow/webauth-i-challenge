require('dotenv').config()

//import server
const server = require('./api/server.js'); 

const port = process.env.port || 5000; 

server.listen(port, () => console.log(`Server is running on http://localhost:${port}`))

