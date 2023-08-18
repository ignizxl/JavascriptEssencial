
//exemplos simples de estruturas condicionais e estruturas de controle

//estruturas condicioanis (if, else if e else)

//declaro a variável nome e atribuo o valor "João"
var nome = "João";

//verifico se o primeiro caractere da variável nome é "J", se for, eu mostro uma mensagem na tela
//obs: como eu estou utilizando apenas um if, eu não preciso abrir e fechar '{}', eu posso simplesmente continuar na mesma linha
if (nome[0] === "J" || "j") console.log("A primeira letra do seu nome é 'J'");


//declaro as variáveis n1 e n2 e atribuo valores inteiros 
var n1 = 32;
var n2 = 2;
//declaro a variável soma que recebe  n1 + n2 
var soma = n1 + n2;
//verifica se o resto da divisão da variável 'soma' é igual a zero, se for, exibe PAR 
if (soma % 2 === 0){
    console.log("A soma entre %d e %d resulta em um número PAR!", n1, n2);
//senão, exibe ÍMPAR
} else {
    console.log("A soma entre %d e %d resulta em um número ÍMPAR!", n1, n2);
}

//o 'else if' funciona como um 'elif' do python

//laço for 

//declaro i como uma variável local(só será utilizada dentro do escopo da laço for) e atribuo o valor 0, e enquanto o i
//for menor que 10, eu incremento o i (i++) a cada iteração do for
console.log("laço for:");
for (let i = 0; i < 10; i ++){
    //e a cada iteração mostro o i
    console.log(i);
}

//existem outras estruturas de for, como por exemplo o for in, o for of... 

//laço while 
//no laço while, precisamos criar um contador
//crio o contador c que inicia valendo 0 e vai sendo incrementado a cada iteração do laço while 
console.log("laço while:");
var c = 0;
//enquanto o c for menor que 10
while (c < 10){
    //mostro o i, e incremento o c 
    console.log(c);
    c++;
}

//while true

console.log("while true")
//c recebe 10
c = 10;
//enquanto verdade, o while repete 
while (true){
    //a cada iteração, verifico se o c é igual a 0
    if (c == 0){
        //se for, eu uso o break pra encerrar o laço 
        break;
    }
    //mostro o c 
    console.log(c);

    //e decremento o c
    c --;

}

//operador ternário 
var idade = 18;
//na própria atrubuição eu já faço a verifição, se a idade for maior ou igual a 18, situação recebe maioridade, senão, situação recebe
//menor
var situacao = (idade >= 18) ? "Maioridade":"Menor"; 
console.log(situacao);