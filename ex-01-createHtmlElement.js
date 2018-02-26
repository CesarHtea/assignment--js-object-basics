/**
 * createHtmlElement()
 *
 * Write a function called `createHtmlElement` that takes an object
 * as argument and returns a simple formatted HTML string.
 *
 * var exampleHtmlObj = {
 *   element: 'h1',
 *   classNames: 'grid small-section',
 *   textContent: 'Lorem ipsum dolor sit amet.'
 * }
 *
 * createHtmlElement(htmlObj)
 *  => '<h1 class="grid small-section">Lorem ipsum dolor sit amet.</h1>'
*/

console.log("========= Create HTML Element ============")

// pasa un objeto (que ya me dan y tiene variables element, textContent, classNames)
// toma los elementos del objeto y crea una string que es una etiqueta de HTML

var exampleObj3 = {
  element: 'span',
  textContent: 'This is an important message.',
  classNames: 'highlight text-important'
}

function createHtmlElement(objetoAConvertir) {
	return '<' + objetoAConvertir.element + ' class="' + objetoAConvertir.classNames + '">' 
	+ objetoAConvertir.textContent + '</' + objetoAConvertir.element + '>'
}
const printEx01 = createHtmlElement(exampleObj3)
console.log(printEx01) 




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var exampleObj1 = {
  element: 'p',
  textContent: 'This is so freaking cool!',
  classNames: 'featured-section'
}

var exampleObj2 = {
  element: 'h2',
  textContent: 'Bill Brasky',
  classNames: 'ui-card-title bg--inverse'
}

var exampleObj3 = {
  element: 'span',
  textContent: 'This is an important message.',
  classNames: 'highlight text-important'
}

var htmlString1 = createHtmlElement(exampleObj1)
var htmlString2 = createHtmlElement(exampleObj2)
var htmlString3 = createHtmlElement(exampleObj3)

console.assert(htmlString1 === '<p class="featured-section">This is so freaking cool!</p>')
console.assert(htmlString2 === '<h2 class="ui-card-title bg--inverse">Bill Brasky</h2>')
console.assert(htmlString3 === '<span class="highlight text-important">This is an important message.</span>')
