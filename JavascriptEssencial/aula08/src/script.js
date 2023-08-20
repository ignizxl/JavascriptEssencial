
// DOM (Document Object Model)
// Quando uma página é carregada o browse cria o DOM que permite ao programador
// selecionar, deletar, alterar ou adicionar elementos HTML

//document é o objeto 'master' getElementById é método ("demo") é o id do elemento que eu quero modificar, innerHTML é a propriedade
///e o "Modificando com o DOM!" é o valor que estou adicionando na tag que possuir o id "demo";

//utilizando o método getElementBId (buscando pelo id)
document.getElementById("demo").innerHTML = "Modificando com o DOM!";

//utilizando o método getElementsByClassName(buscando pela class)
//como o retorno do método é um array de informações, eu preciso armazenar essas informações em algum lugar 
//por isso eu crio a variável x
var x = document.getElementsByClassName("exemplos");
//e como é um array de informações, eu preciso modificar os itens do array utilizando indíces para indicar qual é o elemento
//que vai ser modificado 

//então eu crio um for e a cada iteração do for, eu pego o 'x' na posição 'i' e escrevo a mensagem 'modificando com o dom'
for (let i = 0; i < x.length; i++){
    x[i].innerHTML = "Modicando o item " + i + " com o DOM!";
}

//utilizando o método getElementByTagName (buscando pela tag)

//pego todas as tags com o nome h1 e armazeno dentro de y, mais uma vez, o retorno é um array de informações
//então pra modificar o elemento eu preciso indicar o indíce do elemento 
var y = document.getElementsByTagName("h1");
//escrevendo no item 0 armazenado no 'y' a mensagem inserindo um título com o dom
y[0].innerHTML = "Inserindo um título com o DOM!";

//utilizando o querySelectorAll (buscando tags que tiverem a class ...)
//neste exemplo eu estou buscando todas as tags 'p' que tiverem a class 'paragrafo' e armazeno tudo em z,
//o retorno também é um array de informações 
var z = document.querySelectorAll("p.paragrafo");

//crio um for para percorrer cada elemento de z e a cada iteração eu escrevo no elemento da 'vez' a mensagem
//'modificando com o dom'. então o querySelectorAll é um forma de buscar elementos com um filtro mais específico, por assim dizer.
//existem vários outros seletores  
for (let i = 0; i < z.length; i++){
    z[i].innerHTML = "Moficando o item " + i + " com o dom!";
}

/**
 * document.baseURI         --> retorna a url absoluta do documento
 * document.body            --> retorna o body
 * document.doctype         --> retorna o doctype do documento
 * document.documentURI     --> retorna a url específica do documento 
 * document.domain          --> retorna o domínio
 * document.head            --> retorna o head 
 * document.inputEnconding  --> retorna o charset da página 
 * document.lastModified    --> retorna a última modificação 
 * document.title           --> retorna o título da página
 * document.URL             --> retorna a url do documento 
 * document.forms           --> retorna todos os formulários da página
 * document.links           --> retorna todos os links
 * document.images          --> retorna todas as imagens 
 * document.scripts         --> retorna todas as tags scripts 
 */

alert(document.baseURI);
alert(document.title);
alert(document.URL);

console.log(document.head);
console.log(document.body);
console.log(document.scripts);

//alterando atributo da tag img

//busco o elemento utilzando o método get .NomeDoAtributo = "Valor do atributo";
//no elemento que tive o id imagem, eu pego o atributo src e mudo o valor dele para "foto.jpg"
//então, quando eu iniciar o meu documento, o atributo continua sendo o mesmo de antes, mas quando eu executar o script
//ele vai passar a ser 'foto.jpg'. OBS: foi apenas um exemplo simples, mas você pode alterar qualquer atributo de qualquer 
//outra tag, sempre buscando o elemento .NomeDoAtributo e o valor 

document.getElementById("imagem").src = "foto.jpg";

//alterando o css de uma tag
//é bem parecido com o exemplo acima
//busca o elemento com o método get, .style.nomedapropriedade = 'valor'

//pego o elemento que tive o id tituloNivel2 e altero a cor do elemento pra vermelho
document.getElementById("tituloNivel2").style.color = "blue";

//eventos 

function evento(elemento){
    //escrevendo hello world no elemento que foi passado 
    elemento.innerHTML = "Hello World 2.0";
}

//criando a função do segundo evento
function evento2(){
    //pega o elemento que tem o id onclickporfora e escreve hello world 3.0
    document.getElementById("onclickporfora").innerHTML = "Hello World 3.0";
}
//pega o elemento que tem o nome onclickporfora e quanto o usuário clicar neste elemento, 
//eu chamo a função evento2 pra modificar este elemento
document.getElementById("onclickporfora").onclick = evento2;

function mensagem(){
    alert('A página foi completamente carregada!');
}

function mensagemDeSelect(){
    alert('Opção escolhida!');
}

function funcao01(elemento){
    elemento.innerHTML = "Ok, mouse sobre o elemento";
}

function funcao02(elemento){
    elemento.innerHTML = "passe o mouse aqui!";
}

/**
 * onclick     --> executa alguma ação ao clicar (ex: ao clicar em algum botão ou elemento)
 * onload      --> executa alguma ação ao carregar (ex: ao carregar a página por completo)
 * onchange    --> executa alguma ação ao alterar (ex: escolhendo opção no select)
 * onmouseover --> executa alguma ação quando o cursor do mouse passar por cima de algum elemento por exemplo
 * onmouseout  --> executa alguma ação quando o curso do mouse sair de cima de algum elemento por exemplo
 * onfocus     --> executa alguma ação quando você coloca o foco dentro de algum elemento de um formulário (ex: inserindo dados no campo)
 * onmousedown --> executa alguma ação quando você clica e segura o botão do mouse 
 * onmouseup   --> executa alguma ação quando você solta o botão do mouse 
 */
document.write("O document.write escreve no documento, diferentemente do innerHTML que escreve dentro de uma tag específica");