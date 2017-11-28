const express = require('express');
const app = express();
const crypto = require('crypto');

app.put('/message/:NAME', (req, res) => {
   var id = req.params.NAME;
   res.send(crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex'));
});
app.listen(process.argv[2]);
