document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("Wv6A8jL60uKwsmYoR");

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting in the default way

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let subject = document.getElementById('subject').value;
        let mobileNumber = document.getElementById('mobile_number').value;
        let message = document.getElementById('message').value;

        let templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            mobile_number: mobileNumber,
            message: message
        };

        emailjs.send('service_hyox1xg', 'template_lqy7mpd', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                swal({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success",
                    button: {
                        text: "OK",
                        value: true,
                        visible: true,
                        className: "custom-button",
                        closeModal: true
                    }
                });
            }, function(error) {
                console.log('FAILED...', error);
                swal({
                    title: "Error",
                    text: "Failed to send message. Please try again later.",
                    icon: "error",
                    button: {
                        text: "OK",
                        value: true,
                        visible: true,
                        className: "custom-button",
                        closeModal: true
                    }
                });
            });
    });
});
