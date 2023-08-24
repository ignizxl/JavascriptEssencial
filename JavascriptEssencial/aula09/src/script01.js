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

janelaPOUP.document.write("Escrevendo na minha janela popup"); //escrevendo na janela 
janelaPOUP.opener.document.write("Escrevendo na minha janela PRINCIPAL");