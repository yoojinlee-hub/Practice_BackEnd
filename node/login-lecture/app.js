const express = require("express");
const app = express();

app.get("/",(req, res)=>{
 //기능
 res.send("여기는 루트입니다")
});

app.get("/login",(req, res)=>{
    //기능
    res.send("여기는 login 화면입니다")
   });


app.listen(3000, function() {
    console.log("서버 가동");
});