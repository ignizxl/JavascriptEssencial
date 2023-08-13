
//strins e números 

//quando nós utilizamos caracteres especiais dentro de uma string e esse caractere especial é o mesmo que o de delimitação eu preciso 
//utilzar uma '\' antes do sinal de delimitação pra o js entender é uma string, e não um delimitador

//obs: duas barras invertidas '\\' representam uma barra invertida '\' dentro de uma string 

//exemplos: var texto = 'pegou fogo na caixa d'água';
//se eu tentar printar a variável texto vai dar erro de sintaxe, pra corrigir esse problema eu utilizo uma barra antes do sinal.
//corrigindo: var texto = 'pegou fogo na caixa d\'água'; 
console.log('pegou fogo na caixa d\'água');


//outro exemplo: var soma = " 5 + 5 é igual a "10" ";
//para corrigir, eu posso colocar uma barra invertida '\' na frente dos sinais \" 5 \" ou eu posso simplesmente mudar 
//os delimitadores para '' 
console.log("5 + 5 é igual a '5'");

//corrigindo: var soma = ' 5 + 5 é igual a "10"'; ou var soma = " 5 + 5 = '5' ";
console.log('5 + 5 é igual a "5"');

//pra resumir, eu não posso ter sinais iguais aos sinais delimitadores dentro da minha string 



//length = retorna o tamanho de um array, objeto, string ...
var mensagem = "Eu estou aprendendo Javascript";
console.log("Na frase " + mensagem + ": temos " + mensagem.length + " caracteres!");



//indexOf = inicia do primeiro caractere(0) e retorna a primeira ocorrÊncia (indíce) que o elemento pode ser encontrado 
//lastIndexOf = inicia do último caractere(-1) e retorna a primeira ocorrência (indíce) que o elemento pode ser encontrado 
//search = inicia do primeiro caractere(0) e retorna a primeira ocorrencia (indíce) que o elemento pode ser encontrado 
console.log("Na frase " + mensagem + ": a primeiro indice onde a palavra 'estou' se encontra é " + mensagem.indexOf("estou"));

var exemplo = "neste exemplo vamos buscar o primeiro indíce da palavra exemplo inciando do último caractere";
console.log(exemplo + ": indíce " + exemplo.lastIndexOf("exemplo"));


//slice(inicio, fim) = o slice recebe dois pârametros, o inicio e o fim, e ele vai "extrair" tudo que estiver entre o inicio e o fim
//substring(incio, fim) = funciona da mesma forma que o slice 
//substr(inicio, fim) = funciona de maneira semelhante com o slice e a substring, retornando uma parte da string
// OBS: Se eu não informar o fim as funções vão pegar do caractere inicial até o último. e se eu não informar o inicio e não informar o fim, a função
//me retorna toda string, inciando do caractere 0 e indo até o último
console.log(exemplo + ": eu quero extrar tudo que estiver entre o caractere '0' e o caractere '13'. extração: " + "'" + exemplo.slice(0, 13) + "'");
console.log(exemplo + ": eu quero extrar tudo que estiver entre o caractere '0' e o caractere '13'. extração: " + "'" + exemplo.substr() + "'");

//replace(ocorrencia, substituindoOcorrencia) = substitui ocorrências dentro de uma string 
console.log(mensagem + ": eu vou substituir a palavra 'Javascript' por 'Python' utilzando o 'replace': resultado " + "'" + mensagem.replace("Javascript", "Python") + "'");


console.log(mensagem.toLowerCase()); //deixando tudo em letras minúsculas 
console.log(mensagem.toUpperCase()); // deixando tudo em letras maiúsculas 

//formantando números em x casas flutuantes 

var numero = 123.43212; 
console.log(numero.toFixed(4)); //no toFixed() eu indico a quantidade de casas decimais que eu vou exibir depois da virgula 
console.log(numero.toPrecision(3)); // o toPrecision serve para você definir a quantidade de digitos do seu número 