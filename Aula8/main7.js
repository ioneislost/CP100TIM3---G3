let myArray = [45, 12, 67, 23, 89, 34, 78, 56, 11, 90, 42, 19]
function encontraMaiorNumero(x) {
    let aux=x[0];
    for(let i = 1; i<x.length; i++)
    if(aux<x[i])
    aux=x[i];
    return aux;
}
console.log(encontraMaiorNumero(myArray))