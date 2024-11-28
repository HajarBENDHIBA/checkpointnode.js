const fs = require('fs');

// Créer un fichier welcome.txt avec le texte "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('Fichier welcome.txt créé !');

  // Lire le contenu de welcome.txt
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenu de welcome.txt :', data);
  });
});
