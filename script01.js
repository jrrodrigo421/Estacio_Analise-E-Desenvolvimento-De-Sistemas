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
  a = prompt('insira o valor do primeiro numero a ser somado: ')
  b = prompt('insira o valor do segundo numero a ser somado: ')
  
  c = Number(a + b)
  alert(c)
} 
soma()