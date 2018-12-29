$(document).ready(function () {
    $('.contact-form').on('submit', function () {
        if (/^[a-zа-яёA-ZА-ЯЁ]{3,20}$/.test($('.contact-form #name').val()) == false) {
            $('.contact-form #name').addClass('form-control__error');
            return false
        } else {
            $('.contact-form #name').removeClass('form-control__error');
            $('.contact-form #name').addClass('form-control__success');
        }
        if (/^[a-zа-яёA-ZА-ЯЁ]{3,20}$/.test($('.contact-form #surname').val()) == false) {
            $('.contact-form #surname').addClass('form-control__error');
            return false
        }
        else {
            $('.contact-form #surname').removeClass('form-control__error');
            $('.contact-form #surname').addClass('form-control__success');
        }
        if (/^\+\d{1,2}\(\d{2,3}\)-\d{2}-\d{2}-\d{3}$/.test($('.contact-form #phone').val()) == false) {
            $('.contact-form #phone').addClass('form-control__error');
            return false
        }
        else {
            $('.contact-form #phone').removeClass('form-control__error');
            $('.contact-form #phone').addClass('form-control__success');
        }
        if (/^[a-zа-яёA-ZА-ЯЁ0-9]{3,20}$/.test($('.contact-form #password').val()) == false) {
            $('.contact-form #password').addClass('form-control__error');
            return false
        }
        else {
            $('.contact-form #password').removeClass('form-control__error');
            $('.contact-form #password').addClass('form-control__success');
        }
    });
});