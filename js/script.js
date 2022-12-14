import {baz} from "./app.js"
import {dizerHoras} from "./app.js"
import {somarStrings} from "./app.js" //Sim, isso é possivel
console.log(baz)
console.log(dizerHoras())
console.log(somarStrings("2","2"))

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

// Desenvolver uma função que recebe um parâmetro e retorna se esse parâmetro é uma senha válida ou não (true ou false):
// Uma senha é válida se:
// // Ela for um texto
// // Ela tiver de 6 à 14 caracteres
//       |
//       |
//       |
//      \ /
//       |

let validarSenha = (senha) => {
  let pass = prompt("Insira a senha: ");

  senha = pass;

  if (typeof senha == "string" && senha.length >= 6 && senha.length <= 14) {
    alert("A senha confere!");
  } else {
    alert("A senha não confere");
  }
};

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

// Desenvolver uma função que recebe um valor numérico e retorna o mesmo da seguinte forma: R$ xx.xx (Ex: 9.99 vira R$ 9.99) e caso receba um valor inválido retorna o texto “Valor Inválido”
// Bônus: retornar a estrutura com vírgula dividindo o decimal em vez de ponto (Ex: 9.99 vira R$ 9,99)

// //       |
// //       |
// //      \ /
// //       |

let formatarDinheiro = (valor) => {
  let valorFormatado = `O valor formatado é: R$${valor} Reais`;
  return valorFormatado;
};

console.log(formatarDinheiro(23));

function Massa(texto) {
  if (texto === null) {
    return "string vazia";
  }
}

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

let fileiraEspecial = (passageiro) => {
  if (typeof passageiro != "object") {
    return "Falso";
  }

  if (passageiro.idade >= 60 && passageiro.peso >= 100) {
    return `O passageira ${passageiro.nome} se qualifica para oculpar a fileira especial.`;
  }
};

let cliente = {
  nome: "João Victor Sales Teixeira",
  idade: 16,
  altura: 1.67,
  peso: 40,
};

console.log(fileiraEspecial(cliente));


