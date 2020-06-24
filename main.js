//----------------class
class todoList {
    constructor(){
        this.todos = [];
    }
    
    addtodo(){
        this.todos.push('novo todo');
        console.log(this.todos);
    }
}

class miniList extends todoList{
    constructor(nome) {
        super();
        this.nome = nome;
    }
    mostraNome(){
        console.log(this.nome);
    }
    static soma(a, b){
        return a + b;
    //metedos static nao conversa com o resto da classe 
    
    }
}

const MinhaLista = new todoList();
const lista = new miniList('jeff');

document.getElementById('btAdicionar').onclick = function() {
    MinhaLista.addtodo();
    lista.mostraNome();
    console.log( "oi");

}
console.log( miniList.soma(1, 1) );

// -------------const e let 


const z = 1;
// nao pode reatribuir uma const 
const objeto = {
    nome : 'jeff'
}
//pode mudar o nome ;
objeto.nome = 'jef2';


function testeLet (x){
    let y = 4 ;
    if(y > x) {
        //faz tal coisa
    }
//o  y pode ser usado somente dentro da função
}

//---------Operações array ----------

const arr = [1, 2, 3, 4, 5, 6];

const newArr = arr.map(function(item, index){
    return item * 2;
});
// o map pega cada item do array e retorna um novo valor pra ele
//podendo trabalhar com indece ou nao. no caso retorna [2, 4, 6 ...]

const somatorio = arr.reduce(function(total, next){
    return total + next;
});
//na primeira volta o total vai ser 0 e o next 1
//segunda volta total 1 next 2 
//3- total 3 next 4......

const filter = arr.filter(function(item) {
    return item % 2 === 0;   
//retorna os pares 
});
//a operação de retorno deve ser sempre true or false 
// ele usa cada item na resolução e pega o que for true e retorna como arr

const find = arr.find(function(item){
    return item === 4 ;
});
//roda todo o array e tenda achar algum item igual
 

//---------------arrow function------

const newArr2 = arr.map((item, index)=>item * 2); 

const test = () => ({ nome : 'jeff'});

const test1 = () => 'jeff';

const test2 = (a = 1, b = 2) => a + b;
//valores padrão caso nao seja mandado nenhum valor 

//----------Desestruturação--------
const usuarioZ = {
    nome : 'jeff',
    idade : 21,
    endereço:{
        cidade: 'floripa',
        estado: 'SC',
    },
}
const nomeZ = usuarioZ.nome;
const cidadeZ = usuarioZ.endereço.cidade;
// da pra reduzir para:
const {nome, idae, endereço: { cidade } } = usuarioZ;


//short Syntax

const apelido = 'jefferson';
const idade = 21;

const usuario = {
    apelido,
    idade,
    curso: 'Sistemas',
};

//-------REST ------
const arrayREST = [1, 2, 3, 4, 5, 6];

const[ a, b, ...c] = arrayREST;
//retorna c = [3, 4, 5, 6]

//--------SPREAD-----
const arrSP = [1, 2, 3];
const arrSP2 = [4, 5, 6];

const arrSP3 = [...arrSP, ...arrSP2];
//soma os dois array e volta [1, 2, 3, 4, 5, 6]

//-------Template literals---------

const nomeyy = 'jeff';
const idadeyy = 21;

console.log('Meu nome é ' + nomeyy + ' e tenho ' + idadeyy + ' anos.');
console.log(`Meu nome é ${nomeyy} e tenho ${idadeyy} anos.`);