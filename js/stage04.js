
let numberOne = prompt ("Digite o primeiro número")
let numberTwo = prompt ("Digite o segundo número")


firstNumber = Number(numberOne)
secondNumber = Number(numberTwo)




const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const divRest = firstNumber % secondNumber


alert ("A soma dos dois números é: " + sum  )
alert ("A subtração dos dois números é: " + sub  )
alert ("A multiplicação dos dois números é: " + mult )
alert ("A divisão dos dois números é: " + div.toFixed(2) )
alert ("O resto da divisão dos dois números é: " + divRest  )


let equal = numberOne == numberTwo
let result = numberOne + numberTwo % 2 == 0
 



if (result) {
alert("A soma dos dois números é par.")

}


else {
alert("A soma dos dois números é impar.")
}





if(equal){

alert("Os dois números inseridos são iguais.")

}

else{

alert("Os dois números inseridos são diferentes.")

}

