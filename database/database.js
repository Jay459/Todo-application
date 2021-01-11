const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/TODO_app"

mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology: true }).then(() => {console.log("Connected")}).catch(err => console.log(err));

module.exports = mongoose;