//Alert - Apresenta uma mensagem na tela
// window.alert("Olá Turma do Borges")
// //Confirme - Pergunte com ok/ Cancela (Retorne um true ou false)
// window.confirm("O Jonas Vai Casar!")
// //Prompt - Pega o texto da tela
// window.prompt("Qual o seu nome?")

// console.log("Multímidia")

// let nome = prompt ("Informe o seu nome: ")

// console.log("Bem Vindo!" + nome)

// let numero1 = Number.parseInt(prompt("Digite o primeiro número: " ) )
// let numero2 = Number.parseInt(prompt("Digite o primeiro número: " ) )

// let resultado = numero1 + numero2

let numero1 = Number.parseFloat(prompt("Digite o primeiro número: " ) )
let numero2 = Number.parseFloat(prompt("Digite o primeiro número: " ) )

let resultado = numero1 + numero2


console.log(resultado)

let idade = window.prompt("Qual sua idade?")

if(idade >= 18) {
    console.log("Maior de idade! Dalhee")
}else{
    console.log("Você é menor de idade!")
}

switch (idade) {
    case "18":
         console.log("Maior de idade!")
        break;

        case "27":
        console.log("Esta perto do 30")
        break;


    default:
        console.log("Nada a dizer")
        break;
}