/**
 * makeNamesObject()
 *
 * Create a function that accepts 3 strings with first + last names as arguments
 * The function should return an object with 3 properties:
 * The first name will be a property-name and the last name will be the value
 *
 * EXAMPLE:
 * makeNamesObject("George Washington", "John Adams", "Kanye West")
 *   =>
 *   {
 *      George: "Washington",
 *      John: "Adams",
 *      Kanye: "West"
 *   }
 *
 * HINT: You may need to review `object bracket notation` to dynamically
 *       set an object's property name.
 *
*/

console.log("========= ejercicio 3 ============")

// entran 3 strings
// se retorna un objeto con 3 propiedades

function makeNamesObject(gente1, gente2, gente3) {
	const nuevoObjeto = {}

	let nombreSeparado1 = gente1.split(" ")
	nuevoObjeto[nombreSeparado1[0]] = nombreSeparado1[1]

	let nombreSeparado2 = gente2.split(" ")
	nuevoObjeto[nombreSeparado2[0]] = nombreSeparado2[1]
	
	let nombreSeparado3 = gente3.split(" ")
	nuevoObjeto[nombreSeparado3[0]] = nombreSeparado3[1]
	
	return nuevoObjeto

}
const printEx03 = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")
console.log(printEx03)


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var greatMenObj = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj['Abe'] === "Lincoln")
console.assert(greatMenObj.Kanye === "West")
//-------------------
console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Charlotte === "Webb")
