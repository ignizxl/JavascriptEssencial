
//quando a janela for carregada, vai executar esse código
window.onload = function(){
    //utilizando a queryselectorall para fazer a 'filtragem' das 'tr', então todas as 'tr' que estiverem dentro de uma 'tbody'
    //que fazem parte de uma tabela com a class 'zebra' vão ser armazenadas dentro da variável zebrar
    let zebrar = document.querySelectorAll(".zebra tbody tr");
    //crio um for para percorrer cada elemento dentro de 'zebrar', e incremento o i de 2 em 2, para ter o efeito de zebra
    for (let i = 0; i < zebrar.length; i+= 2){
        //zebrar na posição i vão passar a ter a classe "zebrada", ou seja, vão receber um destaque na cor de fundo
        zebrar[i].className = "zebrada"
    }
}