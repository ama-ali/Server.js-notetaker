//Dependencies
const express = require("express");
const fs = require('fs');
const path = require('path');
const util = require('util');
const { v4: uuidv4 } = require('uuid');

const apiRoutes = require('./routes/apiroutes');
const htmlRoutes = require('./routes/htmlroutes');

//server setup
const app = express();
const port = process.env.PORT || 3001;

// json file parsed middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// handle the static files public path directory
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/notes', apiRoutes);
app.use('/', htmlRoutes);

app.get('/', (req, res) => {
  res.send('root')
})


app.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}.`);
  });