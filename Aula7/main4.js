let Nome = "João Roberto Albino Martins"
let nome = Nome.toLocaleLowerCase();
let Nome2= "Fabio Rodrigo Colombini"
let nome2 = Nome2.toLocaleLowerCase();
const nomeArray = nome.split(" ");
const nomeArray2 = nome2.split(" ");
function email (x){
    let aux = 0;
    aux = x.length    
    return x[0]+"."+x[aux-1]+"@facens.br";
}
console.log(email(nomeArray));
console.log(email(nomeArray2));