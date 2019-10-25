"use strict";

var usuario = {
  nome: 'Bruno',
  idade: 26,
  endereco: {
    cidade: 'São Paulo',
    estado: 'SP'
  }
};

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
