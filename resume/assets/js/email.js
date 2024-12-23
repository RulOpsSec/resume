emailjs.init('Ymkgk7ORe1akX9pN1');

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    emailjs.sendForm('service_9sta71l', 'contact_vchljsg', this)
        .then(function (response) {
            alert('Message sent successfully!');
        }, function (error) { 
            alert('Failed to send, please check all input fields are correct. Error: ' + error.text);
        });
});