function validation() {
    let Email = document.getElementById('email').value;
    let Password = document.getElementById('password').value;

    if (Email == 'nice@gmail.com' && Password == '123') {
        alert('Login Successful!');
    } else {
        alert('login failed!');
    }
}