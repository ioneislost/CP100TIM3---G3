let i = 0
function cadastrarCard() {
    const titulo = document.getElementById('titulo').value;
    if (titulo.trim() === "") {
        alert("Por favor, insira um título para o card.");
        return;
    }

    const cardContainer = document.getElementById('cardsContainer');

    const colDiv = document.createElement('div');
    colDiv.classList.add('col');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'h-50');

    const img = document.createElement('img');
    img.src = ('https://picsum.photos/700/600?random='+i);
    i++;
    img.classList.add('card-img-top');
    img.alt = 'Imagem do Card';

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = titulo;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.innerText = 'Apagar';
    deleteButton.onclick = function() {
        cardContainer.removeChild(colDiv);
    };

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(deleteButton);
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);
    colDiv.appendChild(cardDiv);
    cardContainer.appendChild(colDiv);

    document.getElementById('titulo').value = '';
}

function apagarTodos() {
    const cardContainer = document.getElementById('cardsContainer');
    cardContainer.innerHTML = '';
}