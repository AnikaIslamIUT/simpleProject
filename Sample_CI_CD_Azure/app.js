const express = require("express");
const app = express()


app.get('/',(req,res)=> {
    res.send('Welcome Anika Islam')
})


app.listen(8080, ()=>{
    console.log('server is listening on port 8080....')
})