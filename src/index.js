const {config} = require('dotenv')
config();
const {startServer} = require('./app')


;(async ()=>{
    await startServer();
    // console.log("After")
})()



