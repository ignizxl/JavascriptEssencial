//sobre o document
console.log(document);
//sobre o window
console.log(window);

console.log(window.location.href); //retornando a url do documento

//window.history.back();    //para voltar o histórico
//window.history.forward(); //para avançar o histórico

//o método "set" modifica e "get" pega 

//eu vou guarda no local storage na key 'Nome' o value 'joão igor'
// o set item sempre recebe 2 parâmetros,uma key e um value
window.localStorage.setItem("Nome00", "João Igor");

//agora eu estou pegando o elemento que tem o id 'msg' e vou escrever no elemento o que foi armazenado na key "Nome"
document.getElementById("msg00").innerHTML = window.localStorage.getItem("Nome00");
//o que é armazenado no lacal storage vai permanecer ali de forma permanente, a não ser que o usuário limpe os dados do navegador!

//agora eu estou salvando na sessão o value "Maria" na key Nome
window.sessionStorage.setItem("Nome01", "Maria");
//esse item só vai ser armazenado durante a sessão, ou seja, enquanto o navegador estiver aberto 
document.getElementById("msg01").innerHTML = window.sessionStorage.getItem("Nome01");

//localStorage = armazena um dado de forma permanente, ou até o usuário limpar os dados do navegador
//sessionStorage = só armazena enquanto o navegador estiver aberto

var janelaPOUP = window.open("","", "width=500px, height=400px"); //abrindo uma janela 

//janelaPOUP.document.write("Escrevendo na minha janela popup"); //escrevendo na janela 
//janelaPOUP.opener.document.write("Escrevendo na minha janela PRINCIPAL");

//settimeout = serve para você defenir uma função que será executada uma única vez em um determinado período de tempo 
            //os parâmetros são, uma função e o tempo de espera para executa-lá
setTimeout(function(){console.log("Mensagem via timeout!")}, 2000); //neste exemplo, depois de 2 segundos
// irá aparecer uma mensagem no console
//obs, não precisa criar a função no settimeout, você pode chamar uma função externa, ex:

//criando a função externa para exibir uma mensagem no console
function mensagem(){
    console.log("'Olá, mundo!' Via setTimeOut")
}
//chamando a função externa mensagem para executar depois de 3 segundos 
//obs: digite apenas o nome da função sem abrir e fechar parênteses 
setTimeout(mensagem, 3000);

function mensagemDois(){
    console.log(" Atualize a página clique no botão 'ClearTimeOut' para essa mensagem não aparecer.")
}

//cancelando o setTimeOut
//para cancelar, eu preciso armazenar o setTimeOut em alguma variável para depois utilizar o "ClearTimeOut" na variável que 
//foi armazenada o setTimeOut. ex: clearTimeOut(limpando)
var limpando = setTimeout(mensagemDois, 5000);

//setInterval = vai executar uma função continuamente em 'x' tempo

function mensagemInterval(){
    console.log("Mensagem via interval, clique no botão 'ClearInterval' para interromper a execução!");
}

//vai executar a função mensagemInterval a cada 6 segundos continuamente, e eu armazeno tudo isso em 'msg'
var msg = setInterval(mensagemInterval, 6000);
//pra interroper a execução msg eu também posso utilizar o clearTimeOut, mas, o correto é utilizar
//o clearInterval na variável 'msg'


//criando uma função para escrever uma mensagem no elemento que tiver o id 'obrigado'
function msgObrigado(){
    document.getElementById("obrigado").innerHTML = "Obrigado por permanecer no site!";
}

//usando o setInterval para executar a função verificaFoco a cada 1 segundo e armazeno tudo em 'intervalo'
var intervalo = setInterval(verificaFoco, 1000);

//crio um acumulador que inicia valendo 0
var contador = 0;
//criando a função verificaFoco
function verificaFoco(){
    //document.hasFocus() >> se o usuário estiver na página 
    if (document.hasFocus()){
        //eu incremento o contador e mostro o valor do contador no console
        contador ++;
        console.log(contador);
        
        //verifico se o contador é maior ou igual a 10
        if(contador >= 10){
            //se for, eu chamo a função msgObrigado para escrever a mensagem
            msgObrigado();
            //e depois cancelo a execução da função verificaFoco que está sendo chamada a cada 1 segundo e armazenada em 'intervalo'
            clearInterval(intervalo);

        }
    } else { // e se o usuário sair da página, eu reseto o contador e mostro uma mensagem  
        contador = 0;
        alert("Volte para a página e espere 10 segundos");
    }
}