const username = "Charoennao_t"
const password = "759153"
function hold() {
    const user1 = document.querySelector('#user1');
    user1.value;
    const pass1 = document.querySelector('#pass1');
    pass1.value;
    console.log(user1.value)
    console.log(pass1.value)
    if ((user1.value != 0) && (pass1.value != 0)) {
        if (user1.value == username && pass1.value == password) {
            const J = document.querySelector('h1');
            J.textContent = 'Your username and password are correct! You are loged in.';
            const bar = document.querySelector('div');
            bar.textContent = '';

        }
        else {
            const J = document.querySelector('h1');
            J.textContent = 'Your username or password is incorrect! Please try again';

        }
    }








}

const check = document.querySelector('#buttonL');
check.addEventListener('click', hold);

