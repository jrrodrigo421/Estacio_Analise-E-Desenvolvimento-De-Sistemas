// Alguns Exemplos da Introdução 

// criando uma função simples em javascript 

function somar(a,b) {
  return a + b
}

// console.log(somar(3,3)) 

// criando a mesma função com arrow funcition 

let somar2 = (a,b) => {
  return a + b
}
// console.log(somar2(3,4)) 

let somar3 = (a,b) => a + b
// console.log(somar3(1,1)) 

let soma = () => {
  var a = prompt('insira o valor do primeiro numero a ser somado: ')
  var b = prompt('insira o valor do segundo numero a ser somado: ')
  
  var c = Number(a) + Number(b)
  alert(c)
} 
// soma()

// Exericio proposto
// funçã dividir 
let divida = () => {
  var a = prompt('insira o valor do primeiro numero: ')
  var b = prompt('insira o valor do segundo numero: ')
  
  var c = Number(a) / Number(b)
   
  
  alert("O Resultado de " + a + " divido por " + b + " é " + c)
} 
divida()



// XML HTTP REQUEST 

function alterar() {
  const request = new XMLHttpRequest()
  request.open('GET',
    'http://localhost:5000/1_minha_primeira_pagina_html.html')
  request.onload = () => {
    console.log(request.responseText);
  }
  request.send()
}
// alterar()





