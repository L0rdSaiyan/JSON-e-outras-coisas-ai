export const baz = 123;

export let dizerHoras = () => {
  let data = new Date();

  return `O ano registrado nesta máquina é de: ${data.getFullYear()}`;
};

export let somarStrings = (string1, string2) => {
  //Sim, isso é possivel e eu vou provar através da função eval()!

  return eval(`${string1.toString()} + ${string2.toString()}`);
};



// Desenvolver uma função que recebe um parâmetro e retorna se esse parâmetro é uma senha válida ou não (true ou false):
// Uma senha é válida se:
// // Ela for um texto
// // Ela tiver de 6 à 14 caracteres
//       |
//       |
//       |
//      \ /
//       |


export let validarSenha = (senha) => {
  let pass = prompt("Insira a senha: ");

  senha = pass;

  if (typeof senha == "string" && senha.length >= 6 && senha.length <= 14) {
    alert("A senha confere!");
  } else {
    alert("A senha não confere");
  }
};

// Desenvolver uma função que recebe um valor numérico e retorna o mesmo da seguinte forma: R$ xx.xx (Ex: 9.99 vira R$ 9.99) e caso receba um valor inválido retorna o texto “Valor Inválido”
// Bônus: retornar a estrutura com vírgula dividindo o decimal em vez de ponto (Ex: 9.99 vira R$ 9,99)

// //       |
// //       |
// //      \ /
// //       |

export let formatarDinheiro = (valor) => {
  let valorFormatado = `O valor formatado é: R$${valor} Reais`;
  return valorFormatado;
};


  // Desenvolver uma função que recebe um objeto e, a partir dele, retorna se um cliente pode ou não (true ou false) sentar na fileira especial do avião.
// Para sentar na fileira especial do avião é necessário seguir uma das seguintes condições:
// 1- Ter 60 ou mais anos de idade
// 2- Pesar 100 ou mais Kilos
// Caso a função receba algo diferente de um objeto ou um objeto que não tenha os parâmetros esperados, retorna false.

// // //       |
// // //       |
// // //      \ /
// // //       |


export let fileiraEspecial = (passageiro) => {
  if (typeof passageiro != "object") {
    return "Falso";
  }

  if (passageiro.idade >= 60 && passageiro.peso >= 100) {
    return `O passageira ${passageiro.nome} se qualifica para oculpar a fileira especial.`;
  }
};

//Objeto para testes da função fileiraEspecial()
export let cliente = {
  nome: "João Victor Sales Teixeira",
  idade: 16,
  altura: 1.67,
  peso: 40,
};

// Desenvolver uma função que recebe uma coleção de números e retorna o maior número daquela coleção

// // // //       |
// // // //       |
// // // //      \ /
// // // //       |

export let maiorValor = (colecao) => {
  let maior = 0;
  for (let i = 0; i <= colecao.length; i++) {
    if (colecao[i] >= maior) {
      maior = colecao[i];
    }
  }
  return `O maior valor da coleção é: ${maior}`;
};

//array para a função maiorValor
export const collection = [1, 2, 3, 4, 5, 20, 80, 100];

//Desenvolver uma função que recebe dois parâmetros: uma coleção de textos e um texto. E retorna se o texto passado está na coleção de textos (true ou false)
// // // //       |
// // // //       |
// // // //      \ /
// // // //       |

export const encontrarTexto = (colecao, texto) => {
  for (let i = 0; i <= colecao.length; i++) {
    if (colecao[i] == texto) {
      return true;
    }

    if (!colecao.includes(texto)) {
      return false;
    }
  }
};

export const textos = [
  "O meu coração é puro... Pura maldade!",
  "Javascript sola",
  "Oi, eu sou o Goku!",
];


    //Objeto que será convertido para texto json e para objeto de novo

export const objs = [
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



export const arrayLivros = [
  {
    nome: "Livro 1",
    genero: "Comédia",
  },

  {
    nome: "Livro 2",
    genero: "Terror",
  },
];

export const filtrarLivros = (livros, genero) => {
  const livrosFiltrados = livros.filter(function (elementos) {
    return elementos.genero == genero;
  });

  return livrosFiltrados;
};



export const data = [
  { name: "Matheus", age: 31, sallary: 2000, driverLicense: true },
  { name: "João", age: 18, sallary: 1500, driverLicense: false },
  { name: "Mariana", age: 22, sallary: 4000, driverLicense: true },
  { name: "Pedro", age: 50, sallary: 7200, driverLicense: true },
  { name: "Érica", age: 16, sallary: 0, driverLicense: false },
];


export const dataReverse = data.reverse();
console.log(dataReverse);

export const array = ["João Victor", "Clemilton", "Gabriel", "Léo"];

export const salarioMaisAlto = data.find((user) => user.sallary > 5000);
export const pessoa = array.find((massa) => massa == "João Victor");
