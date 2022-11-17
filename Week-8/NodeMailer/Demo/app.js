var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587,
  secure:false,
  requireTLS:true,
  auth: {
    user: "2a2c8716be7f26",
    pass: "5f1b2e70e375d1"
  }
});

var mailOptions = {
  from: 'gautam.ramani06@gmail.com',
  to: 'gautam.ramani06@gmail.com',
  subject: 'How To Send Email With Attachment Using Node.js - Websolutionstuff',
  html: '<h1>Hello, This is websolutionstuff !!</h1><p>This is test mail..!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


//Mailtrap Account