const endereco = {
    rua: "Tilasco Pinto",
    numero: "69",
    bairro: "Campo Grande",
    cidade: "Covão do Lobo-Aveiro",
}

for (let p in endereco) {
    console.log(`${p}: ${endereco[p]}`)
}