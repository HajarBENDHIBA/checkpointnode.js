const nodemailer = require('nodemailer');

// Créer un transporteur avec vos informations de serveur
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'votre-email@gmail.com',
    pass: 'votre-mot-de-passe'
  }
});

// Options de l'e-mail
const mailOptions = {
  from: 'votre-email@gmail.com',
  to: 'destinataire-email@gmail.com',
  subject: 'Test Nodemailer',
  text: 'Ceci est un e-mail de test envoyé avec Nodemailer.'
};

// Envoyer l'e-mail
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log('Erreur lors de l\'envoi de l\'e-mail :', err);
  } else {
    console.log('E-mail envoyé avec succès :', info.response);
  }
});
