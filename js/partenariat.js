document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;

    if ((username === 'dangel' || username === 'Dangel')) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('dangel').style.display = 'block';
        document.getElementById('message').classList.remove('hidden');
    }
});


document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;

    if ((username === 'Cryostar' || username === 'cryostar') ) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('cryostar').style.display = 'block';
        document.getElementById('message').classList.remove('hidden');
    }
});
