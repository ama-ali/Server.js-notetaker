const express = require("express");
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;




app.listen(PORT, () => {
    console.log(`API server listening on port http://localhost:${PORT}.`);
  });