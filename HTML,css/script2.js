document.addEventListener("DOMContentLoaded", function () {
    const username = document.querySelector('.name');
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    const confirmPassword = document.querySelectorAll('.password')[1];
    const loginBtn = document.querySelector('.login');
    const signupBtn = document.querySelector('.signup');
    const formSection = document.querySelector('.form-section');
    const slider = document.querySelector('.slider');

    const showError = (input, message) => {
        const formField = input.parentElement;
        formField.classList.remove('success');
        formField.classList.add('error');

        const error = formField.querySelector('small');
        error.textContent = message;
    };

    const showSuccess = (input) => {
        const formField = input.parentElement;
        formField.classList.remove('error');
        formField.classList.add('success');

        const error = formField.querySelector('small');
        error.textContent = '';
    };

    const isRequired = (value) => (value.trim() === '' ? false : true);

    const isEmailValid = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const isPasswordSecure = (password) => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        return re.test(password);
    };

    const checkUsername = () => {
        const usernameVal = username.value.trim();
        if (!isRequired(usernameVal)) {
            showError(username, 'Username cannot be blank.');
            return false;
        } else {
            showSuccess(username);
            return true;
        }
    };

    const checkEmail = () => {
        const emailVal = email.value.trim();
        if (!isRequired(emailVal)) {
            showError(email, 'Email cannot be blank.');
            return false;
        } else if (!isEmailValid(emailVal)) {
            showError(email, 'Email is not valid.');
            return false;
        } else {
            showSuccess(email);
            return true;
        }
    };

    const checkPassword = () => {
        const passwordVal = password.value.trim();
        if (!isRequired(passwordVal)) {
            showError(password, 'Password cannot be blank.');
            return false;
        } else if (!isPasswordSecure(passwordVal)) {
            showError(password, 'Password must have at least 8 characters with at least 1 lowercase, 1 uppercase, 1 number, and 1 special character.');
            return false;
        } else {
            showSuccess(password);
            return true;
        }
    };

    const checkConfirmPassword = () => {
        const confirmPasswordVal = confirmPassword.value.trim();
        const passwordVal = password.value.trim();
        if (!isRequired(confirmPasswordVal)) {
            showError(confirmPassword, 'Confirm Password is required');
            return false;
        } else if (passwordVal !== confirmPasswordVal) {
            showError(confirmPassword, 'Confirm Password does not match');
            return false;
        } else {
            showSuccess(confirmPassword);
            return true;
        }
    };

    loginBtn.addEventListener('click', () => {
        slider.classList.remove('moveslider');
        formSection.classList.remove('form-section-move');
    });

    signupBtn.addEventListener('click', () => {
        slider.classList.add('moveslider');
        formSection.classList.add('form-section-move');
    });

    formSection.addEventListener('submit', function (e) {
        e.preventDefault();
        const isUsernameValid = checkUsername();
        const isEmailValid = checkEmail();
        const isPasswordValid = checkPassword();
        const isConfirmPasswordValid = checkConfirmPassword();

        if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            console.log('Form is valid. Submitting...');
            // Add your form submission logic here
        } else {
            console.log('Form is not valid. Please check the fields.');
        }
    });
});
