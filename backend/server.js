const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.get('/', function(req,res){
    let cars ={id:1 ,
         brand:"vw",
        name:"T-roc",
    year:2014}
    // res.send("hello world")
    res.json(cars)
})






























app.listen(5000, () => (
    console.log("server is running on http://localhost:5000")
))