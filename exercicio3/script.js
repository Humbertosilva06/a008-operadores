// A)
console.log("5 é maior que 20 e também é menor que 2?")
const op1 = 5 > 20 && 5 < 2
console.log(op1)

//B)
console.log ("5 é igual a 5 ou igual a '5'")
const op2 = 5 === 5 || 5 === "5"
console.log(op2)
//C)
console.log("negação de vinte é maior que cinquenta")
const op3 = ! 20>50
console.log(op3)

//fiquei com duvida nessa (a afirmação de 20>50 é false, então sua negação seria true?)

//D)
console.log (" negação de (vinte é maior que cinquenta)")
const op4 = !(20>50)
console.log(op4)