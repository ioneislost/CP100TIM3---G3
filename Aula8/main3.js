let soma = function(a){
    let somafor = 0
    for(let i=0;i<a.length;i++)
    somafor += a[i];
    return somafor;
}
console.log(soma([10,20,30,40,50]));