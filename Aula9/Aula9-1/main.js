function alteraImagem() {
    const img = document.querySelector('img');
    img.src = "dog.jpeg"
}
function alteraTitulo() {
    const h1 = document.querySelector('h1');
    h1.textContent = "Este Título Está Alterado"
}
function alteraCor() {
    const p = document.querySelector('p');
    p.style.color = "blue"
}
function tocaAudio() {
    const audio = document.querySelector('audio');
    audio.play()
}
let i=1

function alteraStyle(){
    if(i%2 == 1){
    const botoes1 = document.querySelectorAll(".baixo"); 
    const estilos1 = {
        backgroundColor: 'lightgreen',
        fontSize: '24px',
        color: 'white',
        border: 'none',
        padding: '20px 32px',
        borderRadius: '20px',
        marginBottom: '24px',
    };
    botoes1.forEach(b => { Object.assign(b.style, estilos1); });
    i++;
    }
    else{
        const botoes2 = document.querySelectorAll(".baixo"); 
        const estilos2 = {
            fontSize: '16px',
            padding: '4px 8px',
            backgroundColor: '',
            color: '',
            border: '',
            borderRadius: '',
            marginBottom: '',
        };
        botoes2.forEach(b => { Object.assign(b.style, estilos2); });
        i++;
    }
}