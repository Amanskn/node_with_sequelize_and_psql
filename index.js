const {config} = require('dotenv')
config();
const {startServer} = require('./src/app')


;(async ()=>{
    await startServer();
    // console.log("After")
})()



