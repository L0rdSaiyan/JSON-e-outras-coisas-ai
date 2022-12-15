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

