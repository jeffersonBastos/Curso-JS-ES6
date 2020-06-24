//Exercicio 1

class Usuario{
      

    constructor(email, senha){
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }    
    
    isAdmin(){
//        if(admin == true){
            //return true;
//            console.log("true");
 //       }
        //return false;
        console.log("false");
    }


}

class Admin extends Usuario{
    constructor(email, senha){
        super(email, senha);
        this.admin = true;
    
      }

}
const User1 = new Usuario('email@teste.com', 'senha123');
  const Adm1 = new Admin('email@teste.com', 'senha123');
  console.log( Adm1, User1 );
document.getElementById('btAdicionar').onclick = function() {

  

 User1.admin();
  
 
}


//exercicio 2

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];
 
 //2.1
var idadeUsuarios = usuarios.map(function(usuario){
   return usuario.idade;
});

//2.2
var trabalhamRocketMais18 = usuarios.filter(function(usuario){
  return usuario.empresa === 'Rocketseat' && usuario.idade > 18;
});  
//2.3
var trabalhaNaGoogle = usuarios.find(function(usuario){
  return usuario.empresa == 'Google';
})
//2.4

var IdadeAcima50 = usuarios.filter(function(usuario){
  return usuario.idade * 2 <= 50;
});

//3

const arr3 = [1, 2, 3, 4, 5];
var arrResp3 = arr3.map((item)=>item +10);

const usuario3 = { nome : 'jeff', idade: 23};
const mostraIdade =(usuario)=>usuario.idade;

const nome3 = "jeff";
const idade3 = 21;
const mostraUsuario3 =(nome = 'jeff', idade = 18)=>({nome, idade});

const promisse = ()=> new promisse( (resolve, reject) => resolve());

//4
const empresa4 = {
  nome4: 'Rocketseat',
  endereco4: {
  cidade4: 'Rio do Sul',
  estado4: 'SC',
  }
 };
 const {nome4, endereco4: {cidade4}, endereco4:{estado4} }= empresa4;


 const usuario4 = {
  nomeU4: 'jeff4 ',
  idade4:21,
  enderecoU4: {
  cidadeU4: 'Rio do Sul',
  estadoU4: 'SC',
  }
 };

 const mostraInfo4 =({nomeU4, idade4}= usu)=> nomeU4 + idade4;


 //5 
const arr5 = [1, 2, 3, 4, 5, 6];
var [x5, ...y5] = arr5;



 document.getElementById('btExercicio').onclick = function() {
  //1
  console.log("EX 1 ->");
  console.log( Adm1, User1 );
  //2.1
  console.log("EX 2.1 ->");
  console.log(idadeUsuarios);
  //2.2
  console.log("EX 2.2 ->");
  console.log(trabalhamRocketMais18);
  //2.3
  console.log("EX 2.3 ->");
  console.log(trabalhaNaGoogle);
  //2.4
  console.log("EX 2.4 ->");
  console.log(IdadeAcima50);
  //3
  console.log("EX 3 ->");
  console.log(arrResp3);
  console.log(mostraIdade(usuario3));
  console.log(mostraUsuario3(nome3, idade3));
  console.log(mostraUsuario3(nome3));
  //4
  console.log(nome4, cidade4, estado4);
  console.log(mostraInfo4(usuario4));
  //5
  console.log(x5);
  console.log(y5);

  console.log("chegou");


}
console.log( "oie" );







