import { baz } from "./app.js";
import { dizerHoras } from "./app.js";
import { somarStrings } from "./app.js"; //Sim, isso é possivel
import { validarSenha } from "./app.js";
import { formatarDinheiro } from "./app.js";
import { fileiraEspecial } from "./app.js";
import { cliente } from "./app.js";
import { maiorValor } from "./app.js";
import { collection } from "./app.js";
import {filtrarLivros} from "./app.js"
import {arrayLivros} from "./app.js"
console.log(filtrarLivros(arrayLivros, "Terror"));
console.log(baz);
console.log(dizerHoras());
console.log(somarStrings("2", "2"));
// console.log(validarSenha("Jsreactjs"))
console.log(formatarDinheiro(8000));
console.log(fileiraEspecial(cliente));
console.log(maiorValor(collection));


//Método Reverse

const dataReverse = data.reverse();
console.log(dataReverse);

//Método Find

const salarioMaisAlto = data.find((user) => user.sallary > 5000);
console.log(salarioMaisAlto);

const pessoa = array.find((massa) => massa == "João Victor");

console.log(pessoa);

let numerosArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const encontrarNumsMaiores7 = (colecao) => {
  let numerosMaioresQ7 = [];

  for (let i = 0; i <= colecao.length; i++) {
    if (colecao[i] >= 7) {
      numerosMaioresQ7.push(colecao[i]);
    }
  }

  return `Os números maiores que 7 encontrados são: ${numerosMaioresQ7}`;
};

console.log(encontrarNumsMaiores7(numerosArray));

const numerosCollection = [10, 20, 40, 30];

const mediaColecao = (colecao) => {
  let soma = 0;

  for (let i = 0; i < colecao.length; i++) {
    soma = soma + colecao[i];
  }

  return `A média dos números presentes na coleção ${colecao} é: ${
    soma / colecao.length
  }`;
};

console.log(mediaColecao(numerosCollection));

const arrayAlunosObjs = [
  {
    nome: "João Victor",
    notas: [8, 9, 10],
  },
];

let retornarNomesAlunos = (colecaoObjs) => {
  let retornoNomes = [];

  for (let i = 0; i < colecaoObjs.length; i++) {
    retornoNomes.push(colecaoObjs[i].nome);
  }

  return retornoNomes;
};

console.log(retornarNomesAlunos(arrayAlunosObjs));

const arrayAlunosObjs2 = [
  {
    nome: "João Victor",
    notas: [8, 9, 10],
  },
  {
    nome: "JV",
    notas: [8, 9, 10],
  },
];

let retornarNomesForEach = (array) => {
  let retornoNomes = [];

  array.forEach(function (objetos) {
    retornoNomes.push(objetos.nome);
  });

  return retornoNomes;
};

console.log(retornarNomesForEach(arrayAlunosObjs2));

const arrayNumeros = [100, 200, 300, 400];

const converterArray = (array) => {
  let resultado = array.map(function (elemento) {
    return `R$ ${elemento}`;
  });

  return resultado;
};

console.log(converterArray(arrayNumeros));


console.log(filtrarLivros(arrayLivros, "Terror"));
