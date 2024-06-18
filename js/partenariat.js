document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'dangel' && password === '1234') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('dangel').style.display = 'block';
        document.getElementById('message').classList.remove('hidden');
    } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect');
    }
});
