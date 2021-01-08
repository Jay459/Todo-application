const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const port = 3000

app.get('/' , function(req, res){
    res.render('home');
});


app.get('/add-item' , function(req, res){
    res.render('add-item');
});

app.use(function(req, res){
    res.render('error');
});


app.listen(port, () => {
    console.log(`Server started on ${port}`);
});