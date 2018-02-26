/**
 * makeFullNamesList()
 *
 * Write a function called `makeFullNamesList` that takes an array
 * of objects with first and last names properties and returns
 * an array of strings, where each string is a full title + first & last
 * name.
 *
**/

console.log("========= Exercise 05 =========")

// recibir un array de objetos 
// retornar un arreglo de strings donde cada string es:
//		titulo + nombre + apellido

// const arrayQMeDan = [
// 	{ first: 'Ruby', last: 'Scooby', gender: 'female'},
// 	{ first: 'Jen', last: 'Vin', gender: 'female'},
// 	{ first: 'Dan', last: 'Theman', gender: 'male'},
// ]

function getFullNames(arrayDeObjetos) {
	stringNombres = []
	
	for (let i = 0 ; i < arrayDeObjetos.length ; i++ ) {
		let genderTitulo = ""
		if (arrayDeObjetos[i].gender === "female") {
			genderTitulo = "Ms."
		} 
		else genderTitulo = "Mr."
		stringNombres.push(
			genderTitulo + " " 
			+ arrayDeObjetos[i].first + " " 
			+ arrayDeObjetos[i].last
		)
	}
		return stringNombres
}
// const printEx05 = getFullNamesList(arrayQMeDan)
// console.log(printEx05)



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var customersList = [
    { first: 'Joe', last: 'Blogs', gender: 'male'},
    { first: 'Kate', last: 'Smith', gender: 'female'},
    { first: 'Dave', last: 'Jones', gender: 'male'},
    { first: 'Jacky', last: 'White', gender: 'female'}
]

var moreCustomersList = [
	{ first: 'Ruby', last: 'Scooby', gender: 'female'},
	{ first: 'Jen', last: 'Vin', gender: 'female'},
	{ first: 'Dan', last: 'Theman', gender: 'male'},
]

//===============================
var fullNamesList1 = getFullNames(customersList)
console.assert(typeof fullNamesList1[0] === "string")
console.assert(fullNamesList1[0] === "Mr. Joe Blogs")
console.assert(fullNamesList1[1] === "Ms. Kate Smith")
//-------------------------------
var moreNamesList = getFullNames(moreCustomersList)
console.assert(typeof moreNamesList[1] === "string")
console.assert(moreNamesList[0] === "Ms. Ruby Scooby")
console.assert(moreNamesList[2] === "Mr. Dan Theman")
