let elementosPorClass = document.getElementsByClassName("texto");
let elementoPorID = document.getElementById("formulario")
// Crie uma variável que tenha o valor de um elemento buscado pelo nome da tag
let elementoPorTag = document.getElementsByTagName ("p")


console.log(elementosPorClass);
console.log(elementoPorID);
console.log(elementoPorTag) ;

console.log(elementoPorTag[0].textContent)

elementoPorTag[0].textContent = "Vídeo Engraçado" ; //Modifica o conteudo do elemento

elementoPorTag[0].style.color = "red" ;
elementoPorTag[0].style.fontSize = "30px" ;


//DESAFIOS
// Exiba o 2 segundo elemento(item) da variavel elementos
//Crie uma variável que tenha valor de um elemento buscado pelo nome da tag
//Acesse a propriedade innerText da variável elementoPorTag(é um array, vao ter que acessar a posição do elemento) 
// e exiba no console.lg
//Acesse a propriedade style.color e atribui (=) uma nova cor red em formato de string para a posição 1 da variável elementoPorTag
