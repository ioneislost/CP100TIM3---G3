function inverte(x){
    let gnirts = "";
    for(let i=0; i<x.length; i++)
    gnirts += x[x.length-1-i];
    return gnirts;
}

console.log(inverte("Argumento"));