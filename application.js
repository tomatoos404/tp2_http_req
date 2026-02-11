const express = require('express');
const app = express();
const port = 5000;
const monip = '172.29.18.111' ;
const os = require('os');
const bodyParser = require('body-parser');

app.get('/message_get', (req, res) => {
  res.send('Bonjour mes poulets');
});

app.use(bodyParser.json()); // décode le body d'une requêtes

app.post('/message_post', (req, res) => {
  const donneesDuCorps = req.body;
  console.log(donneesDuCorps);
  res.send('Données reçues et traitées !');
});


// (req, res) => {res.send('Bonjour mes poulets')};

app.listen(port, () => {
  console.log(`le serveur est sur ecoute ${os.networkInterfaces()['ens18'][0].address}:${port}`);
});

//middleware 


// Gestionnaire d'erreurs global
process.on('uncaughtException', (err) => {
  console.error(`Une erreur non capturée s'est produite : ${err.message}`);
  process.exit(1); // 1 signifie une sortie avec une erreur
});
