window.addEventListener('load', () => {
    let cardsContainer = document.getElementById('user-cards');
    let addUserForm = document.getElementById('addUserForm');

    function createUserCard(name, email, avatar) {
        let card = document.createElement('div');
        card.classList.add('col');

        let div = document.createElement('div');
        div.classList.add('card');

        let img = document.createElement('img');
        img.src = avatar;
        img.classList.add('card-img');
        img.alt = name;
        div.appendChild(img);

        let div2 = document.createElement('div');
        div2.classList.add('card-body');
        div.appendChild(div2);

        let h5 = document.createElement('h5');;
        h5.classList.add('card-title');
        h5.innerHTML = name;

        let p = document.createElement('p');;
        p.classList.add('card-text');
        p.innerHTML = email;

        div2.appendChild(h5);
        div2.appendChild(p);

        card.appendChild(div);
        cardsContainer.appendChild(card);
    };

    fetch('https://api.escuelajs.co/api/v1/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                createUserCard(user.name, user.email, user.avatar);
            });
        })
        .catch(error => console.error('Error al obtener los usuarios:', error));

    addUserForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let name = document.getElementById('userName').value;
        let email = document.getElementById('userEmail').value;
        let avatar = document.getElementById('userAvatar').value;

        fetch('https://api.escuelajs.co/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                avatar: avatar,
                password: 'password123',
            }),
        })
            .then(response => response.json())
            .then(newUser => {
                createUserCard(newUser.name, newUser.email, newUser.avatar);

                addUserForm.reset();
                let modal = bootstrap.Modal.getInstance(document.getElementById('addUserModal'));
                modal.hide();
            })
            .catch(error => console.error('Error al añadir el usuario:', error));
    });


});
