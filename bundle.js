"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//SPREAD
var usuario1 = {
  nome: 'Bruno',
  idade: 23,
  empresa: 'Danbru'
};

var usuario2 = _objectSpread({}, usuario1, {
  nome: 'Felipe'
});

console.log(usuario2);
/*
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);
*/
//REST

/*
function soma(a, b, ...params) {
    return params;
}
console.log(soma(1,3,4,4,5,6,7));
*/

/*
const arr = [1, 2, 3, 4];

const [a, b, ...c ] = arr;

console.log(a);
console.log(b);
console.log(c);
*/

/*
const usuario = {
    nome: 'Bruno',
    idade: 26,
   empresa: 'Danbru'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);
*/
