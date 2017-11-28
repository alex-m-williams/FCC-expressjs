const express = require('express');
const app = express();
const crypto = require('crypto');

app.get('/search', (req, res) => {
   var results = req.query;
   res.send(results);
});
app.listen(process.argv[2]);
