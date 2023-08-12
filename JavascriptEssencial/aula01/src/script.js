//vou mostrar uma mensagem na tela com o comando alert()

alert("Olá, mundo!");

//declarando variáveis e tipos de dados
//para declarar uma variável eu utilizo a palavra reservada var seguida do nome da variável e ; no final do código
//exemplo:
var anodeNascimento; //aqui eu inicializei uma variável chamada anodeNascimento, depois eu posso atribuir valores a essa variável
anodeNascimento = 2004;

// ou para simplificar eu posso fazer isso em uma única linha de código, exemplo:
var anoAtual = 2023; //inicializei a variável anoAtual e logo em seguida atribui um valor a ela 
//ambas maneiras estão corretas, mas, eu irei usar essa segunda maneira

//as variáveis podem armazenar vários tipos de dados, os principais são:
var idade = 30; //tipo número(pode ser float >>> 5.50 ou int >>> 10)
var nome = 'João Igor'; //tipo texto (string >> cadeia de caracteres que estão entre aspas simples, duplas ou apostrófo)
var casado = false; //tipo bool (true or false)

//mostrando o valor de cada variável na tela utilizando o 'console.log'
console.log("nome = %s", nome);
console.log("idade = %d", idade);
console.log("anoDeNascimento = %d", anodeNascimento);
console.log("Ano atual: %d", anoAtual);

console.log(typeof(nome)); //o typeof me retorna o tipo de dado de uma variável, que nesse exemplo é 'nome'
//tipo 'array'
//indíces           0         1         2           3
var linguagens = ['Java', 'Python', 'JavaScript', 'C++'];

console.log(linguagens); //mostrando tudo
console.log(linguagens[2]); //mostrando apenas linguagens na posição [2] que é o 'javascript'


//tipo 'object'
//o object é bem parecido com os arrays, a diferença é que nos object nos podemos usar indíces literais ao invés de indíces numéricos
pessoa = {
    //indíce : valor
    nome  : "joão igor",
    idade : 19,
    sexo  : "Masculino" 
}

console.log(pessoa) //mostrando tudo de 'pessoas'

// para mostrar um item especifico basta colocar o (nome_da_variável.nome_do_item) como no exemplo abaixo
console.log(pessoa.nome) 

//null é um tipo de dado especial, é um objeto nulo e sem valor, diferentemente de uma string vazia 
var stringVazia = ''; 
var nulo = null;
//mostrando o tipo
console.log(typeof(stringVazia)); //string
console.log(typeof(nulo)); //object 


//redeclaração de variáveis 

// o javascript não vai redefinir o valor de uma variável ao redeclarar ela, a menos que você altere o valor da variável
var exemplo = "um texto aqui";
var exemplo; //mesmo que eu tenha redeclarado exemplo aqui, ela vai permanecer com o mesmo valor ("um texto aqui")...
// agora se eu redeclarar assim: var exemplo = "agora mudou";  vai mudar porque eu alterei o valor da variável, se eu não alterar
// o valor da variável ela permanece com o mesmo valor ("um texto aqui")   
console.log("redeclarando sem alterar o valor: ",exemplo);

//redeclarando e alterando o valor
var exemplo = "agora mudou";
console.log("redeclarando alterando o valor: ", exemplo)

/**
 *  operadores
 *  + --> adição
 *  - --> subtração
 *  * --> multiplicação
 *  / --> divisão
 *  = --> atribuição 
 *  ++ --> incremento 
 *  -- --> decremento 
 *  += | -= | *= | /= --> resultado += x; é o mesmo que (resultado = resultado + x;), o mesmo serve para - * / MAS, pra isso 
 *  a variável já deve está definida
 * 
 */