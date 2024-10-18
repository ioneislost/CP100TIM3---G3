const produto = {
    nome:"Freddy Fazbear",
    preco:100,
    quantidade:5, 
    calcularTotal:function(){
        return this.preco*this.quantidade
    }
}
console.log(produto.calcularTotal());