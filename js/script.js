const objs = [

    {
    "nome":"João Victor",
    "idade":16,
    "esta_trabalhando": false,
    "hobbies": ["Programar","Jogar","Fazer exercícios"],
    "detalhes_profissao":{

        "profissao": "Programador",
        "empresa": "Microsoft"

    }

    },

    {

        "nome":"João Victor Sles",
        "idade":20,
        "esta_trabalhando": true,
        "hobbies": ["Programar","Jogar","Fazer exercícios"],
        "detalhes_profissao":{
    
            "profissao": "Programador",
            "empresa": "XBOX"
    
        }


    }

]

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


  //Método reverse

  const dataReverse = data.reverse();
console.log(dataReverse)