///////////EXERCÍCIO 1 
/*let array
console.log('a. ', array)*/
/*Será impresso no console: a. undefined*/ 

/*array = null
console.log('b. ', array)*/
/*Será impresso no console: b. null*/

/*array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)*/
/*Será impresso no console:c. 11*/

/*let i = 0
console.log('d. ', array[i])*/
/*Será impresso no console: d. 3*/

/*array[i+1] = 19
console.log('e. ', array)*/
/*Será impresso no console: a array com o número 4 substituido pelo 19*/

/*const valor = array[i+6]
console.log('f. ', valor)*/
/*Será impresso no console: f. 9*/


///////////EXERCÍCIO 2
/*Será impresso no console: SUBI NUM ÔNIBUS EM MIRROCOS, 27*/

/*const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)*/

///////////ESCRITA DE CÓDIGO 1
/*const nome = prompt("Qual é o seu nome?")
const email = prompt ("Digite seu email")

console.log(`O email ${email} foi cadastrado com sucesso.Seja bem-vinda(o), ${nome}`)*/

////////////EXERCÍCIO 2
/*let comida = ["escondidinho", "pastel", "pizza", "estrogonofe", "churrasco"]
console.log(comida)
console.log("Essas são as minhas comidas preferidas:")
console.log(comida[0])
console.log(comida[1])
console.log(comida[2])
console.log(comida[3])
console.log(comida[4])

const comidaFav = prompt("Qual é a sua comida favorita?")

comida[1] = comidaFav

console.log(comida)*/

///////////EXERCÍCIO 3
let array 
const listaDeTarefas = array

const tarefa1 = prompt("Insira uma tarefa que você faz no seu dia")
const tarefa2 = prompt("Segunda tarefa")
const tarefa3 = prompt("terceira tarefa")

array = [tarefa1, tarefa2, tarefa3]
console.log(array)

const indice = prompt("digite o índice de uma tarefa que você ja realizou")
array.splice(indice, 1)
console.log(array)


























