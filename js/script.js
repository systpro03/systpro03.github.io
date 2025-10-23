/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('show');
    menuIcon.classList.toggle('active');
});

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });

        }
    });

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    if (window.scrollY <= 100) {
        header.classList.remove('header-opaque');
        header.classList.add('header-transparent');
    } else {
        header.classList.remove('header-transparent');
        header.classList.add('header-opaque');
    }
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});
ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.services-container, .hobbies-container, .portfolio-box, .porject-box, .contact-form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content p,.about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content h3,.about-content', {origin: 'right'});

const typed = new Typed('.multiple-text', {
    strings: ['System Programmer', 'Web Developer'],
    typeSpeed: 100,
    backspeed: 100,
    backdelay: 2000,
    loop: true
});

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'systemprogrammer04@gmail.com',
    pass: 'Genit@04',
  },
});

exports.sendEmail = functions.https.onRequest((req, res) => {
  const { name, address, fromEmail, subject, message } = req.body;

  const mailOptions = {
    from: fromEmail,
    to: 'systemprogrammer04@gmail.com',
    subject: subject,
    text: `Name: ${name}\nAddress: ${address}\nEmail: ${fromEmail}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    return res.status(200).send('Email sent successfully!');
  });
});





