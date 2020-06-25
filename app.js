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

var server = process.env.PORT || 3000 ;
app.listen(server,()=>{
    console.log("Server is running on 3000");
})



