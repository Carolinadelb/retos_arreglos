/*Escriba una función 'computeAverageLengthOfWords' que recibe dos strings y devuelve el promedio de la longitud de ambos strings.

Ejemplo de entrada:

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6 */

let computeAverageLengthOfWords = (word1, word2) => {
  return (word1.length + word2.length) / 2;
}

/*Escriba una función llamada getNthElement.

Dado un arreglo y un entero, getNthElement devuelve el valor según el entero dado, dentro del arreglo dado.

Notas:

Si el arreglo tiene una longitud de 0, debería devolver' undefined'.
Ejemplo de entrada:

var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3 */

/*Escribe una función llamada convertDoubleSpaceToSingle.

Dada una cadena, convertDoubleSpaceToSingle devuelve la cadena pasada 
en cadena con todos los espacios dobles convertidos a espacios simples.

Ejemplo de entrada:

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"

Notas:

Para hacer este problema, debes estar familiarizado con String.split, y Array.join. */
let str = "string  with  double  spaces";
const convertDoubleSpaceToSingle = (str) => {
  return str.split(" ");
}
let convertDoubleSpaceToSingle = "string  with  double  spaces";
console.log(convertDoubleSpaceToSingle.join(''));

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output.join());

const convertDoubleSpaceToSingle = (str) => {
  return convertDoubleSpaceToSingle.join('');
}


/*Escriba una función llamada "getLongestWordOfMixedElements".

Dado un arreglo de tipos mixtos, "getLongestWordOfMixedElements" 
devuelve la cadena más larga del arreglo dado.

Notas:

Si el arreglo está vacío, debería devolver una cadena vacía ("").
Si el arreglo no contiene cadenas de texto, debería devolver una cadena vacía */

let array = [3, 'word', 5, 'up', 3, 1];
const getLongestWordOfMixedElements = (array) => {
  for (let i = 0; i<array.length ; i++){
    if (array[i] === "") {
    return " ";
  }
  if (i< )
  }
}