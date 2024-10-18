const Aluno1 = {
    name:"Ana",
    age:15,
    course:"CE",
    ra:236912,
}
const Aluno2 = {
    name:"João",
    age:35,
    course:"CE",
    ra:236912,
}
const Aluno3 = {
    name:"Lucas",
    age:12,
    course:"CE",
    ra:236912,
}
const Aluno4 = {
    name:"Maria",
    age:28,
    course:"CE",
    ra:236912,
}

let myArray = [Aluno1, Aluno2, Aluno3, Aluno4]

function alunosMaior(x){
    let ArrayMaior = [];
    for(let i=0; i<x.length;i++)
    if(x[i].age>=18)
    ArrayMaior.push(x[i]);
    return ArrayMaior;
}

console.log(alunosMaior(myArray));