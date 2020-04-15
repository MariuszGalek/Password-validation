const password = document.querySelector('#password');
const info = document.querySelector('.passInfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minLength = 10;

const checkPassword = () => {
    if (password.value.length >= minLength && password.value.match(numbers) && password.value.match(letters) && password.value.match(special)) {
        info.innerHTML = 'Your password is very strong!';
        info.style.color = 'lime'
    } else if (password.value.length >= minLength && password.value.match(numbers) && password.value.match(letters)) {
        info.innerHTML = 'Your password is ok.';
        info.style.color = 'gold'
    } else {
        info.innerHTML = 'Your password is weak.';
        info.style.color = 'red'
    };
};

password.addEventListener('keyup', function(){
    if(password.value !== '') {
        checkPassword();
    } else {
        info.innerHTML = 'You must enter a password...';
        info.style.color = null;
    };
})