const express = require('express')
const {connectDb} = require('../db-connection/connect-db');


const app = express();
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:false}))


async function startServer(){
    try {
        let connect=await connectDb();
        return new Promise(function(resolve, reject){
            // console.log("Connect value is :-",connect)
            app.listen(port,(err)=>{
                if(err){
                    console.error("@@@Error:-",err.message);
                    reject()
                    process.exit(1);
                }
                console.log("Server is running on port:- ",port)
                resolve()
            
            });

        })
      
        app.listen(port,(err)=>{
            if(err){
                console.error("@@@Error:-",err.message);
                reject()
                process.exit(1);
            }
            console.log("Server is running on port:- ",port)
        })
    } catch (error) {
        console.log("Error in app.js",error.message)
        process.exit(1)
    }
       
}

module.exports = {
    startServer
}