let myArray = [1,2,3,4,5,6,7,8,9,10];
function impar(x) {
    let ArrayImpar = [];
    for(let i=0; i<x.length;i++)
    if(x[i]%2===1)
    ArrayImpar += x[i]+" ";
    return(ArrayImpar);
}
console.log(impar(myArray));