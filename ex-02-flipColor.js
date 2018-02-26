/**
 * flipColor()
 *
 * Write a function called flipColor. This function may be
 * used to change the color of a tile in a game. It should
 * take as input an object. If that object's color property
 * has the value blue, it should change it to red, and
 * vice-versa.
*/


console.log("========= Flip Color of Title ============")

// entra (pasa) un objeto
// is la propiedad 'color' del objeto es blue, pasarlo a red, y viceversa

// var tileObj = {
//     width: "200px",
//     height: "200px",
//     color: "blue"
// }

function flipColor(objetoDelGame) {
	if (objetoDelGame.color === "blue") {
		objetoDelGame.color = "red"
	} 
	else if (objetoDelGame.color === "red") {
		objetoDelGame.color = "blue"
	}
	console.log(objetoDelGame)
	return objetoDelGame 
}
// console.log(flipColor(tileObj))



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var tileObj = {
    width: "200px",
    height: "200px",
    color: "blue"
}

var tileObj2 = flipColor(tileObj)

console.assert(tileObj2.color === "red")

var tileObj3 = flipColor(tileObj2)
console.assert(tileObj3.color === "blue")







