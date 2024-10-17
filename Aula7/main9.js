function Validação(email) {
    
    const Arrobas = email.split('@').length - 1;
    const ArrobaIndex = email.indexOf('@');
    const PontoIndex = email.indexOf('.', ArrobaIndex);

    return Arrobas === 1 && PontoIndex > ArrobaIndex + 1;
}

console.log(Validação("teste@exemplo.com"));
console.log(Validação("teste@exemplo"));     
console.log(Validação("teste@@exemplo.com")); 
console.log(Validação("teste@.com"));         
console.log(Validação("teste@exemplo.c"));    
console.log(Validação("teste.exemplo@com"));