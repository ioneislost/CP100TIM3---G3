function inserir(valor) {
    let display = document.querySelector('#display');
    if (display.innerText === '0') {
        display.innerText = valor;
    } else {
        display.innerText += valor;
    }
}
