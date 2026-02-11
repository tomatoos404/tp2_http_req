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

// Gestionnaire d'erreurs global
process.on('uncaughtException', (err) => {
  console.error(`Une erreur non capturée s'est produite : ${err.message}`);
  process.exit(1); // 1 signifie une sortie avec une erreur
});
