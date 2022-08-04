// //Criação do objeto estudante

// const estudante = {
//     nome: "Marina",
//     sobrenome: "Azzi Nogueira",
//     matricula: 403865,
//     notasSemestre: [7, 9.5, 8]
// }

// console.log("Objeto Estudante", estudante);

// //adicionando uma nova propriedade ao objeto

// estudante.modulo = "HTML Semantico"

// console.log("Objeto estudante com modulo", estudante);

// // Imprimindo informações do objeto estudante

// console.log("Nome da pessoa estudante:", estudante.nome);
// console.log("Segunda nota do semestre:", estudante.notasSemestre [1]);
// console.log("Modulo atual:", estudante.modulo);

// // Fazendo copia do objeto estudante

// const copiaEstudante = {...estudante} //... = spread operator - operador de espalhamento
// console.log("Copia do objeto estudante", copiaEstudante);


// // Alterando o valor da propriedade nome

// copiaEstudante.nome = "Astrodev"

// console.log("Copia com nome Alterado", copiaEstudante);

// // Adicionando a nota 9 as notas do semestre

// // copiaEstudante.notasSemestre.push(9)

// copiaEstudante.notasSemestre = [...
// copiaEstudante.notasSemestre, 9]

// console.log("Copia com nova nota adicionada", copiaEstudante);

// // Alterando o valor da propriedade módulo

// copiaEstudante.modulo = "Flexbox e Grid"

// console.log("Copia com modulo alterado", copiaEstudante);

// // Criação do array estudantesLabenu

// const estudantesLabenu = []

// estudantesLabenu.push(estudante)
// estudantesLabenu.push(copiaEstudante)

// console.log("Array de Estudantes da labenu", estudantesLabenu);


//Exercicio de Fixação

//Criação do objeto Carrinho

const carrinho = {
    nome: "Roberval",
    pagamento: "Cartao",
    endereco: "Rua BlaBla, 7"
}

console.log("Objeto Carrinho", carrinho);

//Adicionando "array de objetos" Compras

carrinho.compras = [
    
    {produto: "Faqueiro",
    preco: 453.25,
    quantidades: 3},
    
    {produto: "Panela",
    preco: 53.50,
    quantidades: 5},

    {produto: "Frigideira",
    preco: 45.29,
    quantidades: 2}
]

//Quantidade de compras no carrinho

console.log("Minhas Compras", carrinho.compras);

//Copia do objeto "carrinhoPresente"

const carrinhoPresente = {...carrinho}

console.log("Copia do Carrinho Presente", carrinhoPresente);

carrinhoPresente.nome = "Josefina"
carrinhoPresente.pagamento = "Cartão Presente"
carrinhoPresente.endereco = "Rua Lalala, 87"

console.log("Compra com Cartão Presente", carrinhoPresente);
console.log("Segundo item da lista", carrinhoPresente.compras [1]);





