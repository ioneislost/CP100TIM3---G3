function vogais(x){
    let y = 0;
    for(let i = 0; i<x.length; i++)
    if(x[i]==="a" || x[i]==="e" || x[i]==="i" || x[i]==="o" || x[i]==="u" || x[i]==="A" || x[i]==="E" || x[i]==="I" || x[i]==="O" || x[i]==="U")
    y++;
    return y;
}

console.log(vogais("Argumento"));