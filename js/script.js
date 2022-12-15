import { baz } from "./app.js";
import { dizerHoras } from "./app.js";
import { somarStrings } from "./app.js"; //Sim, isso é possivel
import { validarSenha } from "./app.js";
import { formatarDinheiro } from "./app.js";
console.log(baz);
console.log(dizerHoras());
console.log(somarStrings("2", "2"));
console.log(validarSenha("Jsreactjs"))
console.log(formatarDinheiro(8000))

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

console.log(Massa(""));

// Desenvolver uma função que recebe um objeto e, a partir dele, retorna se um cliente pode ou não (true ou false) sentar na fileira especial do avião.
// Para sentar na fileira especial do avião é necessário seguir uma das seguintes condições:
// 1- Ter 60 ou mais anos de idade
// 2- Pesar 100 ou mais Kilos
// Caso a função receba algo diferente de um objeto ou um objeto que não tenha os parâmetros esperados, retorna false.

// // //       |
// // //       |
// // //      \ /
// // //       |


console.log(fileiraEspecial(cliente));

const collection = [1, 2, 3, 4, 5, 20, 80, 100];

let maiorValor = (colecao) => {
  let maior = 0;
  for (let i = 0; i <= colecao.length; i++) {
    if (colecao[i] >= maior) {
      maior = colecao[i];
    }
  }
  return `O maior valor da coleção é: ${maior}`;
};

console.log(maiorValor(collection));

const textos = [
  "O meu coração é puro... Pura maldade!",
  "Javascript sola",
  "Oi, eu sou o Goku!",
];

const encontrarTexto = (colecao, texto) => {
  for (let i = 0; i <= colecao.length; i++) {
    if (colecao[i] == texto) {
      return true;
    }

    if (!colecao.includes(texto)) {
      return false;
    }
  }
};

console.log(encontrarTexto(textos, "Oi, eu sou o Goku!"));

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
