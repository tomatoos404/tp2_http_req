const express = require('express');
const app = express();
const port = 5000;
const monip = '172.29.18.111' ;

app.get('/message', (req, res) => {
  res.send('Bonjour mes poulets');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://${monip}:${port}`);
});