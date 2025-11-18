// let login = window.prompt("Digite o seu usuario?")
// let senha = window.prompt("Digite a sua senha:")

// switch (login) {
//     case "admin":
//         console.log("Usuário Correto. Bem-sucedido!")
//         break;

//     default:
//         console.log("Usuário Incorreto. Tente novamente.")
//         break;
// }

// switch (senha) {
//     case "senha123":
//         console.log("Senha Correta. Bem-sucedido!")

//         break;

//     default:
//         console.log("Senha Incorreta. Tente novamente.")
//         break;
// }

let login = prompt("Digite o seu usuário?")

let senha = prompt("Digite a sua senha:")

if(login == "admin" && senha == "senha123") {
    console.log("Login Bem sucedido!")
}
else{
    console.log("Você não tem permissão de acesso!")
}
    