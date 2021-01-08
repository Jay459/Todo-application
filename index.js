const express = require('express');
const app = express();
const port = 3000

app.get('/' , function(req, res){
    res.sendFile('./views/home.html',{root:__dirname});
});


app.get('/add-item' , function(req, res){
    res.sendFile('./views/add-item.html',{root:__dirname});
});

app.use(function(req, res){
    res.sendFile('./views/error.html',{root:__dirname});
});


app.listen(port, () => {
    console.log(`Server started on ${port}`);
});