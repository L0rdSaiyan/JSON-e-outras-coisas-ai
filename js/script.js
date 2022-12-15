import { baz } from "./app.js";
import { dizerHoras } from "./app.js";
import { somarStrings } from "./app.js"; //Sim, isso é possivel
import { validarSenha } from "./app.js";
import { formatarDinheiro } from "./app.js";
import { fileiraEspecial } from "./app.js";
import { cliente } from "./app.js";
import { maiorValor } from "./app.js";
import { collection } from "./app.js";
console.log(baz);
console.log(dizerHoras());
console.log(somarStrings("2", "2"));
// console.log(validarSenha("Jsreactjs"))
console.log(formatarDinheiro(8000));
console.log(fileiraEspecial(cliente));
console.log(maiorValor(collection));

const objs = [
  {
    nome: "João Victor",
    idade: 16,
    esta_trabalhando: false,
    hobbies: ["Programar", "Jogar", "Fazer exercícios"],
    detalhes_profissao: {
      profissao: "Programador",
      empresa: "Microsoft",
    },
  },

  {
    nome: "João Victor Sles",
    idade: 20,
    esta_trabalhando: true,
    hobbies: ["Programar", "Jogar", "Fazer exercícios"],
    detalhes_profissao: {
      profissao: "Programador",
      empresa: "XBOX",
    },
  },
];

//json
//converter objeto para json
// const jsonData = JSON.stringify(objs)
// console.log(objs)
// console.log(jsonData)
// const objData = JSON.parse(jsonData)
// console.log(objData)

// alert(`Nome: ${objs[1].nome}`)

const data = [
  { name: "Matheus", age: 31, sallary: 2000, driverLicense: true },
  { name: "João", age: 18, sallary: 1500, driverLicense: false },
  { name: "Mariana", age: 22, sallary: 4000, driverLicense: true },
  { name: "Pedro", age: 50, sallary: 7200, driverLicense: true },
  { name: "Érica", age: 16, sallary: 0, driverLicense: false },
];

const array = ["João Victor", "Clemilton", "Gabriel", "Léo"];

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
];

let retornarNomesForEach = () =>{

  



}






