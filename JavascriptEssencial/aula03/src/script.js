
// arrays e objetos 

//para guardar um conjunto de dados de um mesmo contexto é melhor utilizar arrays e objetos, ao invés de criar variáveis simples como 
//no exemplos abaixo

//para melhorar, nos podemos guardar esses dados dentro de um array
var nome = 'João';
var sobrenome = 'Igor';
var idade = 19;

//mas ainda não é o adequado, para este caso, o recomendado é usar um objeto 
//index             0     1     2
//var pessoa = ['João', 'Igor', 19];

//os delimitadores especiais de um objeto são as chaves {}
//a vantagem é que nos objetos nós podemos usar indíces literais como por exemplo 'nome' , 'sobrenome' , idade'.... ao invés de usar
//indíces numéricos como 0 1 2 ...

//veja um exemplo abaixo:
var pessoa = {
    //key | value >>> é bem parecido com os dicionários do python 
    nome : 'João'      ,
    sobrenome : 'Igor' ,
    idade : 19         ,
    //nossas keys também podem ter funções
    andar : function(){
        alert('Caminhando...');
    }
}   


//o array é recomendado para armazenar dados de um mesmo contexo, como por exemplo: frutas, tipos de carros ...
var frutas = ['maça', 'melão', 'laranja', 'banana'];


console.log(pessoa.andar())

/**
 * pop = remove o último elemento 
 * push = adiciona na última posição 
 * sort = ordena em ordem crescente 
 * reverse = ordena em ordem decrescente
 * shift = remove o primeiro elemento do array
 * unshift = adiciona na primeira posição do array 
 * toString = retorna no formato de string 
 * join = junta os elementos de um array com algo entre eles 
 */

//exemplos práticos

console.log('A quantidade de itens dentro da variável "frutas" é ' + frutas.length);
console.log(frutas)
console.log('Ordenando utilizando o "sort" = ' + frutas.sort());
console.log('Ordenando utilizando o "reverse" = ' + frutas.reverse());
console.log('Frutas .toString = ' + frutas.toString());
console.log(frutas.join(' - '));
console.log('Removendo a primeiro elemento do array de frutas com o comando "shift": ' + frutas.shift());
console.log('Adicionando a fruta "melancia" no array de frutas utilizando o comando "push": ' + frutas.push('Melancia'));
console.log(frutas)