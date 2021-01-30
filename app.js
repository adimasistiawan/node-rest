require('dotenv').config();
const express = require('express');
const app = express();

app.get('/api', (req,res)=>{
    res.json({
        message:"Hallo",
    })
})

app.listen(process.env.APP_PORT,()=>{
    console.log("server running",process.env.APP_PORT)
})