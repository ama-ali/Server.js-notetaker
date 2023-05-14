//`GET /notes` should return the `notes.html` file.
// `GET *` should return the `index.html` file.
// import dependencies

const express = require('express');
const router = express.Router();
const path = require('path');

//`GET /notes` should return the `notes.html` file.
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'notes.html'));
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = router;