const nodemailer = require('nodemailer');

// Create a transporter using Gmail's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nourkachmar@gmail.com',
    pass: '123Bffs123',
  },
});

function sendEmail(name, email) {
  const mailOptions = {
    from: 'nourkachmar@gmail.com',
    to: 'nourkachmar@gmail.com', // Your email address to receive the RSVP emails
    subject: 'New RSVP',
    text: `Name: ${name}\nEmail: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/rsvp', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  // Call the sendEmail function with the attendee's details
  sendEmail(name, email);

  // Send a confirmation email to the attendee (code to be added later)

  res.send('RSVP submitted successfully!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
