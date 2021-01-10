const express = require('express');
const app = express();
const db = require('./database/database')
app.set('view engine', 'ejs');
const routes = require('./routes/routes');
const port = 3000

app.use(routes);

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});