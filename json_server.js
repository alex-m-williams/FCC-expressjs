const express = require('express');
const app = express();
const fs = require('fs');

app.get('/books', (req, res) => {
   fs.readFile(process.argv[3], (err, data) => {
      if (err) throw err;
      var content = JSON.parse(data);
      res.json(content);
   });
});
app.listen(process.argv[2]);
