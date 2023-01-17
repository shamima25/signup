const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//Show input error message

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

//Email

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,9}$/;


form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'Username is required');
    }
    else {
        showSuccess(username);
    }
    if (email.value === '') {
        showError(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is not valid');
    }
    else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'Password is required');
    }
    else {
        showSuccess(password);
    }
    if (password.value != '' && password.value.match(decimal)) {
        showSuccess(password);
    } else {
        showError(password, 'Input Password and Submit [8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
    }
    if (password2.value === '') {
        showError(password2, 'confirm password is required');
    }
    else {
        showSuccess(password2);
    }


});

function CheckPassword(inputtxt) {

    if (inputtxt.value.match(decimal)) {
        return true;
    }
    else {
        alert('Input Password and Submit [8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character')
        return false;
    }
} 