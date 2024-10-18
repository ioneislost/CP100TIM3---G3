const Aluno = {
    name:"John Doe",
    age:50,
    course:"CE",
    ra:236912,

    mostrarInformações : function() {
        return this.name + "\n" +  this.age +  "\n" + this.course + "\n" + this.ra;
    }
}
console.log(Aluno.mostrarInformações());