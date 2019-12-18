// ajax formatting was taken from
// https://stackoverflow.com/questions/33984667/how-to-get-around-the-formspree-redirect
setUpContactForm = function() {
    const $form = $('#contact__form');
    const $name = $('#name');
    const $email = $('#email');
    const $message = $('#message');
    $form.on('submit', function(event) {
        event.preventDefault();
        const messageString = `Name: ${$name.val()}\nEmail: ${$email.val()} \nMessage: "${$message.val()}"`;
        $.ajax({
            url: 'https://formspree.io/xknowaya', 
            method: 'POST',
            data: {
                message: messageString
            },
            dataType: 'json'
        }).then(function(data){
            $name.val('');    
            $email.val('');
            $message.val('');
            $('#contact__form__status').text('Message sent - Thank you').fadeIn(1000);
            setTimeout(() => { $('#contact__form__status').fadeOut(1000); }, 4000);
        }).fail((function(data) {
            $('#contact__form__status').text('There was a problem submitting this email.').fadeIn(1000);
            setTimeout(() => { $('#contact__form__status').fadeOut(1000); }, 4000);
        }));
    });
};

setUpContactForm();