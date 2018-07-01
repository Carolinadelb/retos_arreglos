/* Ejercicio 1:
Escriba una función 'computeAverageLengthOfWords' que recibe dos strings 
y devuelve el promedio de la longitud de ambos strings.
Ejemplo de entrada:

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6 */

let computeAverageLengthOfWords = (word1, word2) => {
  return (word1.length + word2.length) / 2;
}

/*Ejercicio 2:
Escriba una función llamada getNthElement.

Dado un arreglo y un entero, getNthElement devuelve el valor según el entero dado, dentro del arreglo dado.

Notas:

Si el arreglo tiene una longitud de 0, debería devolver' undefined'.
Ejemplo de entrada:

var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3 */
const getNthElement = (array, n) => {
  return array[n];
}
let output = getNthElement([1,3,5],1);
console.log(output);


/*Ejercicio 3:
Escribe una función llamada convertDoubleSpaceToSingle.

Dada una cadena, convertDoubleSpaceToSingle devuelve la cadena pasada 
en cadena con todos los espacios dobles convertidos a espacios simples.

Ejemplo de entrada:

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"

Notas:

Para hacer este problema, debes estar familiarizado con String.split, y Array.join. */
const convertDoubleSpaceToSingle = (str) => {
  let singleSpace = str.split("  ");//El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas
  console.log(singleSpace);
  let newString = singleSpace.join(" ");
  return newString;
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output);


/*Ejercicio 4:
Escribe una función llamada areValidCredentials.

Dando un nombre y una contraseña, areValidCredentials, devuelve true si el nombre es superior a 3 caracteres, Y, la contraseña tiene al menos 8 caracteres de longitud. De lo contrario, devuelve false.

Ejemplo de entrada:

var output = areValidCredentials('Ritu', 'mylongpassword');
console.log(output); // --> true
*/

const areValidCredentials = (name, password) => {
  if (name.length > 3 && password.length > 8) {
    return true;
  } else {
    return false;
  }
}
let output = areValidCredentials('Ritu', 'mylongpassword');
console.log(output);


/*Ejercicio 5:
Dada una lista de números enteros no negativos y una suma objetivo, encuentre un par de números que sumen a la suma objetivo.

Ejemplo de entrada:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5] */

const findPairForSum = (array, number) => {
  
  for (var i = 0 ; i < array.length ; i++) {
    let pair = array[i] 
    let sub_arr = (array.slice(0, i)).concat(array.slice(i+1, array.length));
    
    for (var j = 0; j < sub_arr.length ; j++) {
      if (pair + sub_arr[j] === number) {
        return [pair, sub_arr[j]];
      }
    }
  }
  
}
let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair);

/*Ejercicio 6:
Escriba una función llamada "filterOddElements".

Dado un array de números,"filterOddElements" devuelve un array que contiene sólo los números impares del array dado.

Ejemplo:

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
*/

const filterOddElements = (arr) => {
  
  let numbN = [];
  
  for ( let num = 0; num < arr.length; num++ ) {
    if ( arr[num] % 2 !== 0 ) {
      numbN.push(arr[num]);
    }
  }
  return numbN;
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output);

/*Ejercicio 7:
Escriba una función llamada "findShortestWordAmongMixedElements".

Dado un array, "findShortestWordAmongMixedElements" devuelve la cadena más corta dentro del array dado.

Notas:

Si hay vínculos, debería devolver el primer elemento que aparezca en el array dado.
Espere que el array tenga otros valores además de las cuerdas.
Si el array dado está vacío, debería devolver una cadena vacía.
Si el array dado no contiene cadenas, debería devolver una cadena vacía.
Ejemplo:

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
*/
const findShortestWordAmongMixedElements = (arr) => {
  let shortest = '';
  
  if(arr.length > 0){
    arr.forEach( e => {
      if(typeof e === 'string'){
        if(shortest === ''){
          shortest = e;
        } else if (e.length < shortest.length){
          shortest = e;
        }
      }
    })
  
  }
  return shortest;
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output);
