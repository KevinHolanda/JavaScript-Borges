let idade = parseInt(prompt("Digite uma idade: "))

while(idade < 18){
 idade = parseInt(prompt("Você é menor de idade, digite outra idade: "))
}

console.log("Voê é maior de idade. Sua idade é: " + idade)