const express = require('express');
const cors = require('cors')
const app = express();
app.use(
    cors({
      origin: "*",
    })
  );
app.use(express.json());
app.use(express.urlencoded({ extended: false }));  
app.use('/api' , require('./routes/api')) 

app.listen(8000 , (err)=>{
    if(err){
        throw "problem to connect server"
    }
    console.log("connect")
})
