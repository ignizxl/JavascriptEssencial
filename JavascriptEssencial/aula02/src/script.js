//funções

/**
 * Uma função nada mais é que um bloco de código que executa uma determinada tarefa
 * Uma função somente é executada mediante uma chamada específica a ela 
 * 
 * Exemplos práticos:
 */

//criando uma função chamada 'alerta' que recebe como parâmetro uma mensagem
function alerta(mensagem){
    //depois uso a função 'alert' para exibir um 'balão de aviso' com a mensagem
    alert(mensagem);
}

alerta('primeiro exemplo');

//criando a função 'soma' que recebe 2 parâmetro, n1 e n2
function soma(n1, n2){
    //retornando a soma entre n1 e n2
    return n1 + n2;
}
//chamando a função 'alerta' para exibir o resultado da função 'soma' (n1 = 15, n2 = 10)
alerta(soma(15, 10));

//as funções também podem ter parâmetros opcionais, veja abaixo 

//criando a função divisão que recebe 2 parâmetros, o parâmetro 'por' é opcional, isso significa
//que se eu não passar nenhum valor no parâmetro 'por', por padrão ele vai valer '2'
function divisao(numero, por = 2){
    //retorna a divisão de 'numero' divido 'por'
    return numero / por;
}

//chamando a função divisão passando apenas um parâmetro
alerta(divisao(10));
//chamando a função divisão passando os dois parâmetros
alerta(divisao(12, 3));


//escopo de variável