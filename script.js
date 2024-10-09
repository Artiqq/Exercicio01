/* 
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- A soma dos dois números;
- A subtração dos dois números;
- A multiplicação dos dois números;
- A divisão dos dois números;
- O resto da divisão dos dois números;
*/

let name = prompt("Digite seu nome")
alert("Bem vindo " + name)

let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")

const soma = Number(firstNumber) + Number(secondNumber)
const sub = Number(firstNumber) - Number(secondNumber)
const mult = Number(firstNumber) * Number(secondNumber)
const div = Number(firstNumber) / Number(secondNumber)
const rest = Number(firstNumber) % Number(secondNumber)

alert("A soma dos dois números é: " + soma)
alert("A subtração dos dois números é: " + sub)
alert("A multiplicação dos dois números é: " + mult)
alert("A divisão dos dois números é: " + div)
alert("O resto da divisão dos dois números é: " + rest)

if (soma % 2 === 0) {
  alert("A soma dos dois números é par")
} else {
  alert("A soma dos dois números é impar")
}

if (firstNumber === secondNumber) {
  alert ("Os números inseridos são iguais")
} else {
  alert("Os números inseridos são diferentes")
}