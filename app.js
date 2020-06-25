var express=require('express'),
    bodyParser=require('body-parser'),
    config=require('./config'),
    jwt=require('jsonwebtoken');


var   quizRoutes=require('./routes/quiz');

var app =express();
app.use(bodyParser.json())

app.get('/',(req,res)=>{

    res.send("<h1> Backend-API for Quiz App </h1>")
})

app.use('/quiz',quizRoutes);

app.listen(3000,()=>{
    console.log("Server is running on 3000");
})



