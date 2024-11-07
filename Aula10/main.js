const apiUrl = 'https://672b47be976a834dd02662a6.mockapi.io/Usuario/animais';

// Função para buscar a lista de animais do MockAPI e exibi-la
async function carregarAnimais() {
    try {
        const response = await fetch(apiUrl);
        const animais = await response.json();
        
        const lista = document.getElementById('lista');
        lista.innerHTML = '';

        animais.forEach(animal => {
            const item = document.createElement('li');
            item.classList.add('animal-item');
            item.textContent = `${animal.id} - ${animal.name} (${animal.idade} anos) – ${animal.raca}`;
            lista.appendChild(item);
        });
    } catch (error) {
        console.error('Erro ao carregar animais:', error);
    }
}

// Função para cadastrar um novo animal no MockAPI (dados hardcoded)
async function cadastrarAnimal() {
    const novoAnimal = {
        name: "Totó",
        idade: 12,
        raca: "Cachorro"
    };

    try {
        await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoAnimal)
        });
        
        // Recarrega a lista após o cadastro
        carregarAnimais();
    } catch (error) {
        console.error('Erro ao cadastrar animal:', error);
    }
}

// Carregar a lista de animais ao carregar a página
document.addEventListener('DOMContentLoaded', carregarAnimais);
