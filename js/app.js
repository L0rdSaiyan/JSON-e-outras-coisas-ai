export const baz = 123;

export let dizerHoras = () => {
  let data = new Date();

  return `O ano registrado nesta máquina é de: ${data.getFullYear()}`;
};

export let somarStrings = (string1, string2) => {
  //Sim, isso é possivel e eu vou provar através da função eval()!

  return eval(`${string1.toString()} + ${string2.toString()}`);
};


export let validarSenha = (senha) => {
  let pass = prompt("Insira a senha: ");

  senha = pass;

  if (typeof senha == "string" && senha.length >= 6 && senha.length <= 14) {
    alert("A senha confere!");
  } else {
    alert("A senha não confere");
  }
};