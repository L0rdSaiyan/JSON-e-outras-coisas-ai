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


let cliente = {
  nome: "João Victor Sales Teixeira",
  idade: 16,
  altura: 1.67,
  peso: 40,
};
