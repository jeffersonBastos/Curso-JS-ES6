"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//----------------class
var todoList = /*#__PURE__*/function () {
  function todoList() {
    _classCallCheck(this, todoList);

    this.todos = [];
  }

  _createClass(todoList, [{
    key: "addtodo",
    value: function addtodo() {
      this.todos.push('novo todo');
      console.log(this.todos);
    }
  }]);

  return todoList;
}();

var miniList = /*#__PURE__*/function (_todoList) {
  _inherits(miniList, _todoList);

  var _super = _createSuper(miniList);

  function miniList(nome) {
    var _this;

    _classCallCheck(this, miniList);

    _this = _super.call(this);
    _this.nome = nome;
    return _this;
  }

  _createClass(miniList, [{
    key: "mostraNome",
    value: function mostraNome() {
      console.log(this.nome);
    }
  }], [{
    key: "soma",
    value: function soma(a, b) {
      return a + b; //metedos static nao conversa com o resto da classe 
    }
  }]);

  return miniList;
}(todoList);

var MinhaLista = new todoList();
var lista = new miniList('jeff');

document.getElementById('btAdicionar').onclick = function () {
  MinhaLista.addtodo();
  lista.mostraNome();
  console.log("oi");
};

console.log(miniList.soma(1, 1)); // -------------const e let 

var z = 1; // nao pode reatribuir uma const 

var objeto = {
  nome: 'jeff'
}; //pode mudar o nome ;

objeto.nome = 'jef2';

function testeLet(x) {
  var y = 4;

  if (y > x) {} //faz tal coisa
  //o  y pode ser usado somente dentro da função

} //---------Operações array ----------


var arr = [1, 2, 3, 4, 5, 6];
var newArr = arr.map(function (item, index) {
  return item * 2;
}); // o map pega cada item do array e retorna um novo valor pra ele
//podendo trabalhar com indece ou nao. no caso retorna [2, 4, 6 ...]

var somatorio = arr.reduce(function (total, next) {
  return total + next;
}); //na primeira volta o total vai ser 0 e o next 1
//segunda volta total 1 next 2 
//3- total 3 next 4......

var filter = arr.filter(function (item) {
  return item % 2 === 0; //retorna os pares 
}); //a operação de retorno deve ser sempre true or false 
// ele usa cada item na resolução e pega o que for true e retorna como arr

var find = arr.find(function (item) {
  return item === 4;
}); //roda todo o array e tenda achar algum item igual
//---------------arrow function------

var newArr2 = arr.map(function (item, index) {
  return item * 2;
});

var test = function test() {
  return {
    nome: 'jeff'
  };
};

var test1 = function test1() {
  return 'jeff';
};

var test2 = function test2() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return a + b;
}; //valores padrão caso nao seja mandado nenhum valor 
//----------Desestruturação--------


var usuarioZ = {
  nome: 'jeff',
  idade: 21,
  endereço: {
    cidade: 'floripa',
    estado: 'SC'
  }
};
var nomeZ = usuarioZ.nome;
var cidadeZ = usuarioZ.endereço.cidade; // da pra reduzir para:

var nome = usuarioZ.nome,
    idae = usuarioZ.idae,
    cidade = usuarioZ.endereço.cidade; //short Syntax

var apelido = 'jefferson';
var idade = 21;
var usuario = {
  apelido: apelido,
  idade: idade,
  curso: 'Sistemas'
}; //-------REST ------

var arrayREST = [1, 2, 3, 4, 5, 6];
var a = arrayREST[0],
    b = arrayREST[1],
    c = arrayREST.slice(2); //retorna c = [3, 4, 5, 6]
//--------SPREAD-----

var arrSP = [1, 2, 3];
var arrSP2 = [4, 5, 6];
var arrSP3 = [].concat(arrSP, arrSP2); //soma os dois array e volta [1, 2, 3, 4, 5, 6]
//-------Template literals---------

var nomeyy = 'jeff';
var idadeyy = 21;
console.log('Meu nome é ' + nomeyy + ' e tenho ' + idadeyy + ' anos.');
console.log("Meu nome \xE9 ".concat(nomeyy, " e tenho ").concat(idadeyy, " anos."));
