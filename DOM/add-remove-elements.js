// crie uma variavel que busque por nome de tag - Section

let secao = document.getElementsByTagName("section");
let novoParagrafo = document.createElement("p"); //cria um elemento no meu HTML
let formularElemento = document.getElementById("formulario");
let labelElemento = document.getElementById("label");

novoParagrafo.textContent = "Paragrafo criado via JS" ; //poe um conteudo no p

document.body.appendChild(novoParagrafo) ;
//secao[0]. appendChild(novoParagrafo) ;

formularElemento.removerChild(labelElemento);
