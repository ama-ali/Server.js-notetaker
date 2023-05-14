//dependencies
const express = require('express');
const router = express.router();
const fs = require('fs');
const path = require ('path');
const {v4: uuidv4} = require ('uuid');

// get method to show saved notes
router.get('/', (req, res) => {
  // read db.json file and send data 
  fs.readfile('./db/db.json', 'utf8', (err, data) => {
    res.send(json,parse(data))
  })
})
