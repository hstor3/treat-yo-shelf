const loginForm = async (e) => {
    e.preventDefault();

    const email = document.querySelector('#user-input').value.trim();
    const password = document.querySelector('#pass-input').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'applocation/json' },
        });

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert(response.statusText);
        }
    }
};

const signup = async (e) => {
    e.preventDefault();

    debugger
    const email = document.querySelector('.userInput').value.trim();
    const password = document.querySelector('.passInput').value.trim();
debugger
    if (email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginForm);
document.querySelector('.signup-form').addEventListener('submit', signup);