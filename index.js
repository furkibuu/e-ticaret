const express = require("express");
const path = require("path");
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = new express();
const set = require("./Set/condig.json")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index'); 
  });

  app.get("/hakkimizda", (req,res) => {
    res.render("hakkimizda")

  })

  app.post('/send', (req, res) => {
    const { adSoyad, email, mesaj } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'e-posta',
          pass: 'şifre'
      }
 
  });

  const mailOptions = {
    from: 'e-posta',
    to: 'e-posta',
    subject: 'İletişim Formundan Yeni Mesaj',
    html: `
        <div style="padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
            <h3 style="margin-bottom: 10px;">İletişim Formundan Yeni Mesaj</h3>
            <div>
                <strong>Ad Soyad:</strong> ${adSoyad}
            </div>
            <div>
                <strong>Email:</strong> ${email}
            </div>
            <div>
                <strong>Mesaj:</strong> ${mesaj}
            </div>
        </div>
    `
};
  

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      console.log(error);
      res.redirect('/iletisim');
  } else {
      console.log('Email sent: ' + info.response);
      res.redirect('/iletisim');
  }
});

  })







  app.get("/iletisim", (req,res) => {
    res.render("iletisim")
  })


  app.get("/urunler", (req,res) => {
    res.render("urunler")
  })


  
app.listen(set.Port, () => {
    console.log(`Server listening at http://localhost:${set.Port}`);
  });
