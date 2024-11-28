const passwordGenerator = require('generate-password');

const password = passwordGenerator.generate({
  length: 10,
  numbers: true,
  symbols: true
});

console.log('Mot de passe généré :', password);
