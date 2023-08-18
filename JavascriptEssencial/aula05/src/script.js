
// datas 

var dataInicial = new Date(86400000);
console.log(dataInicial);



//essas são algumas formas de criar um objeto do tipo data 
//var data = new Date(milisegundos);
//var data = new Date(string);
//var data = new Date(ano, mes, dia, hora, minuto, segundos, milisegundos);

//essa é a forma mais utilizada de criar um objeto do tipo date :
var data = new Date();
console.log(data); 



console.log("toUTCstring: " + data.toUTCString());
console.log("toDateString: " + data.toDateString());

//metódos 'get' para pegar as datas.
console.log("getDate: " + data.getDate()); //dia do mÊs
console.log("getDay: " + data.getDay()); //dia da semana 
console.log("getFullYear: " + data.getFullYear());//ano
console.log("getHours: " + data.getHours()); //horas
console.log("getMinutes: " + data.getMinutes()); //minutos
console.log("getSeconds: " + data.getSeconds()); //segundos
console.log("getMilliseconds: " + data.getMilliseconds()); //milesegundos
console.log("getMonth: " + data.getUTCMonth()); //mês 
console.log("getTime: " + data.getTime());

//também existe os métodos set para modificar as datas. 

//criando um função para formatar a data, ela recebe um parâmetro opcional que por padrão já é um objeto do tipo date
function formataData(data = new Date()){

    var dia = data.getDate(); //pego o dia
    var mes = data.getMonth() + 1; //pego o mês e somo + 1 porque inicia do 0
    var ano = data.getFullYear(); //e pego o ano 

    //converto o dia e mês pra str e verifico se o tamanho é igual a 1, se for eu concateno com um '0' para formar 2 digitos 
    if (dia.toString().length == 1){
        dia = '0' + dia;
    } if (mes.toString().length == 1){
        mes = '0' + mes;
    } 
    
    //retorno o dia, o mês e o ano separados por '/'
    return dia + "/" + mes + "/" + ano;
}
//chamo a função sem passar nada
console.log(formataData());