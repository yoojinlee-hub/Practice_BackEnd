const express = require("express");
const app = express();

app.get("/", (req, res) => {
    //기능
    res.send(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<input type="text" placeholder="id"><br>
<input type="text"placeholder="pw"><br>
<button>login</button>
</body>
</html>
`)
});

app.get("/login", (req, res) => {
    //기능
    res.send(`
        <!DOCTYPE html>
        <html lang="ko">
        <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
<body>
    <input type="text" placeholder="id"><br>
    <input type="text"placeholder="pw"><br>
    <button>login</button>
</body>
</html>
    `)
});


app.listen(3000, function () {
    console.log("서버 가동");
});