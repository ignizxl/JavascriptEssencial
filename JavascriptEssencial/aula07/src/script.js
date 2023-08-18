
//tratamento de exceções 
// try catch

//uma exceção nada mais é do que um erro que ocorreu durante a execução do fluxo principal do seu código

//estrutura do try catch

/**
 *    try{
 *        ..... tentando executar 
 *  } catch ('nomeDaVariavel'){
 *       ..... tratando a exceção 
 *  } finally {
 *       ..... o bloco de código do finally sempre vai ser executado, mesmo se houver, ou não,  uma exceção
 *  }
 *     
 */

//exemplos:

//tentando...
try{
    //estou chamando a função 'alert' errada de propósito para ocorrer uma exceção
    aalert("olá, mundo!");

    //pego a exceção, e crio a variável erro que irá receber todos os dados do erro
} catch (erro) {
    //mostro um 'balão' de aviso seguido do erro 
    alert("Erro: " + erro);
//e pra finalizar, uso o finally (OBS: não é obrigatório usar o finally)
} finally{
    alert("O finally sempre irá acontecer, mesmo se houver, ou não, uma exceção");
}

//eu também posso disparar exceções personalizadas usando a palavra 'throw'
//declaro a variável numero e atribuo o valor 5 
var numero = 5;
//tentando 
try{
    //verifica se o número é menor que 10, se for, eu disparo uma exceção personalizada usando a palavra 'throw' e logo em seguida 
    //coloco a descrição do erro 
    if (numero < 10) throw "O número precisa ser maior que '10'";
    //se não ocorrer uma exceção, mostro uma mensagem de sucesso na tela 
    alert("Sucesso! Não ocorreu nenhuma exceção");
//se por acaso o número for menor que 10, a minha variável 'e' vai receber a descrição da minha exceção personalizada 
//e vai mostrar na tela 
} catch (e) {
    alert("Erro: " + e);
}

//criando a função verifica
function verifica(){
    //pego o elemento que tiver o id 'numero' e pego o value dele e armazeno em x  
    var x = document.getElementById('numero').value;

    //tentando
    try {
        //se o x estiver vazio, disparo uma exceção personalizada
        if (x == '') throw "Informe um número inteiro!";
        //se o x não for um valor númerico, disparo outra exceção personalizada
        if (isNaN(x)) throw "Você precisa informar um número inteiro!";
        //se chegou até aqui, forço o x para ser um número
        x = Number(x);
        //verifico se o x for menor que 10 ou maior que 20, disparo outra exceção personalizada
        if (x < 10 || x > 20) throw "Digite um número inteiro entre 10 e 20";
        
        //e se nenhuma exceção foi disparada, pego o elemento que tiver o id descrição e escrevo uma mensagem no elemento
        document.getElementById("descricao").innerHTML = ("Perfeito! você digitou o número " + x);
    
        //pega a exceção e armazena dentro de 'excecao' 
    } catch (excecao) {
        //mesmo esquema, pego o elemento que tiver o id 'descricao' e escrevo no elemento a descrição do erro 
        document.getElementById("descricao").innerHTML = ("Erro: " + excecao);
    }
}