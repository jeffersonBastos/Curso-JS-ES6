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

//Exercicio 1
var Usuario = /*#__PURE__*/function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      //        if(admin == true){
      //return true;
      //            console.log("true");
      //       }
      //return false;
      console.log("false");
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  var _super = _createSuper(Admin);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this, email, senha);
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log(Adm1, User1);

document.getElementById('btAdicionar').onclick = function () {
  User1.admin();
}; //exercicio 2


var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; //2.1

var idadeUsuarios = usuarios.map(function (usuario) {
  return usuario.idade;
}); //2.2

var trabalhamRocketMais18 = usuarios.filter(function (usuario) {
  return usuario.empresa === 'Rocketseat' && usuario.idade > 18;
}); //2.3

var trabalhaNaGoogle = usuarios.find(function (usuario) {
  return usuario.empresa == 'Google';
}); //2.4

var IdadeAcima50 = usuarios.filter(function (usuario) {
  return usuario.idade * 2 <= 50;
}); //3

var arr3 = [1, 2, 3, 4, 5];
var arrResp3 = arr3.map(function (item) {
  return item + 10;
});
var usuario3 = {
  nome: 'jeff',
  idade: 23
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

var nome3 = "jeff";
var idade3 = 21;

var mostraUsuario3 = function mostraUsuario3() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'jeff';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

var promisse = function promisse() {
  return new promisse(function (resolve, reject) {
    return resolve();
  });
}; //4


var empresa4 = {
  nome4: 'Rocketseat',
  endereco4: {
    cidade4: 'Rio do Sul',
    estado4: 'SC'
  }
};
var nome4 = empresa4.nome4,
    cidade4 = empresa4.endereco4.cidade4,
    estado4 = empresa4.endereco4.estado4;
var usuario4 = {
  nomeU4: 'jeff4 ',
  idade4: 21,
  enderecoU4: {
    cidadeU4: 'Rio do Sul',
    estadoU4: 'SC'
  }
};

var mostraInfo4 = function mostraInfo4() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : usu,
      nomeU4 = _ref.nomeU4,
      idade4 = _ref.idade4;

  return nomeU4 + idade4;
}; //5 


var arr5 = [1, 2, 3, 4, 5, 6];
var x5 = arr5[0],
    y5 = arr5.slice(1);

document.getElementById('btExercicio').onclick = function () {
  //1
  console.log("EX 1 ->");
  console.log(Adm1, User1); //2.1

  console.log("EX 2.1 ->");
  console.log(idadeUsuarios); //2.2

  console.log("EX 2.2 ->");
  console.log(trabalhamRocketMais18); //2.3

  console.log("EX 2.3 ->");
  console.log(trabalhaNaGoogle); //2.4

  console.log("EX 2.4 ->");
  console.log(IdadeAcima50); //3

  console.log("EX 3 ->");
  console.log(arrResp3);
  console.log(mostraIdade(usuario3));
  console.log(mostraUsuario3(nome3, idade3));
  console.log(mostraUsuario3(nome3)); //4

  console.log(nome4, cidade4, estado4);
  console.log(mostraInfo4(usuario4)); //5

  console.log(x5);
  console.log(y5);
  console.log("chegou");
};

console.log("oie");
