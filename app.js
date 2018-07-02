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

/*Ejercicio 8:
Escriba una función llamada "findSmallestNumberAmongMixedElements".

Dado un arreglo de elementos mixtos, "findSmallestNumberAmongMixedElements" devuelve el número más
 pequeño dentro del arreglo dado.

Notas:

Si el arreglo está vacío, debería devolver 0.
Si el arreglo no contiene números, debería devolver 0.
Ejemplo:

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
*/
const findSmallestNumberAmongMixedElements = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  let newArr = []; //variable para guardar los que son números
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      newArr.push(arr[i]);
    }
  }
  if (newArr.length === 0) {
    return 0;
  }
  let smallest = newArr[0];
  for (let j = 1; j < newArr.length; j++) {
    if (smallest > newArr[j]) {
      smallest = newArr[j];
    }
  }
  return smallest;
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); 

/*Ejercicio 9:
Escriba una función llamada "getLongestWordOfMixedElements".

Dado un arreglo de tipos mixtos, "getLongestWordOfMixedElements" devuelve la cadena más larga del arreglo dado.

Notas:

Si el arreglo está vacío, debería devolver una cadena vacía ("").
Si el arreglo no contiene cadenas de texto, debería devolver una cadena vacía.
Ejemplo:

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
*/

const getLongestWordOfMixedElements = (arr) => {
  let longestWord = '';
  
  for(let i = 0; i < arr.length; i++){
   if(typeof arr[i] === 'string' && longestWord.length === 0 || arr[i].length > longestWord.length){
       longestWord = arr[i];
     }
   } 
   return longestWord;
 }
 
 let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
 console.log(output); // --> 'word'

 /*Ejercicio 10:
 Escriba una función llamada "getLargestNumberAmongMixedElements".

Dado cualquier arreglo, "getLargestNumberAmongMixedElements" devuelve el mayor número en el arreglo dado.

Notas:

El arreglo puede contener valores de un tipo distinto a los números.
Si el arreglo está vacío, debería devolver 0.
Si el arreglo no contiene números, debería devolver 0.
Ejemplo:

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
 */
const getLargestNumberAmongMixedElements = (arr) => {
  let largestNumber;
  let numberCount;
  let numberArray = [];
  
  for ( var element = 0; element < arr.length; element++ ) {
    if ( typeof arr[element] === 'number' ) {
      numberCount++;
      numberArray.push(arr[element]);
    }
  }
  
  if ( arr.length < 1 || numberCount < 1 ) {
    return 0;
  }
  
  largestNumber = numberArray[0];
  
  for (let number = 0; number < numberArray.length; number++ ) {
    if ( numberArray[number] > largestNumber ) {
      largestNumber = numberArray[number];
    }
  }
  return largestNumber;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output);

/*Ejercicio 11:
Escriba una función llamada computeSumOfAllElements.

Dado un array de números, computeSumOfAllElements devuelve la suma de todos los elementos del array dado.

Ejemplo:

var output = computeSumOfAllElements([1, 2, 3]);
console.log(output); // --> 6
*/
const computeSumOfAllElements = (arr) => {
  let newNum = 0;  
  for (let i in arr) {  // itera en el array
    newNum = newNum + arr[i];  
  }
  return newNum;
}

let output = computeSumOfAllElements([1, 2, 3]);
console.log(output);

/*Ejercicio 12:
Escribe una función llamada "computeSumBetween".

Dado 2 enteros, "computeSumBetween" devuelve la suma entre los dos enteros dados, 
comenzando en num1 y excluyendo num2.

Notas:

La suma entre 1 y 4 es 1 + 2 + 3 = 6.
Si num2 no es mayor que num1, debe devolver 0.
var output = computeSumBetween (2, 5);
console.log (salida); // -> 9

*/
const computeSumBetween = (num1, num2) => {
  let sum = 0;
  for (let i = num1; i < num2; i++) {
    sum += i;
  }
  return sum;
}

let output = computeSumBetween(2, 5);
console.log(output);

/*Ejercicio 13:
Escribe una función llamada getLongestOfThreeWords.

Dado 3 palabras, getLongestOfThreeWords devuelve la más larga de tres palabras.

Notas:

Si hay un empate, debe devolver la primera palabra en el empate.
var output = getLongestOfThreeWords('estos', 'tres', 'palabras');
console.log(salida); // -> 'estos'
*/
const getLongestOfThreeWords = (word1, word2, word3) => {
  let wordsArr = [word1, word2, word3];
  let longestWord = '';
  
  for (var i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length > longestWord.length) {
      longestWord = wordsArr[i];
    } 
  }
  return longestWord;
}
let output = getLongestOfThreeWords('estos', 'tres', 'palabras');
console.log(output); // 'palabras'

/*Ejercicio 14:
Escribe una función llamada findShortestOfThreeWords.

Dado 3 cadenas, findShortestOfThreeWords devuelve el más corto de las cadenas dadas.

Notas:

Si hay empate, debe devolver la primera palabra en la lista de parámetros.
var output = findShortestOfThreeWords('a', 'dos', 'tres');
console.log(salida); // -> 'a'
 */
const findShortestOfThreeWords = (word1, word2, word3) => {
  let wordsArr = [word1, word2, word3];
  let shortestWord = word1;
  
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length < shortestWord.length) {
      shortestWord = wordsArr[i];
    }
  }
  return shortestWord;
}
let output = findShortestOfThreeWords('a', 'dos', 'tres');
console.log(output);

/*Ejercicio 15:
Escribe una función llamada calculateBillTotal.

Dado el pre impuesto y la cantidad antes de propina de una comida, calculateBillTotal devuelve la cantidad total debida después de impuestos y propina.

Notas:

Suponga que el impuesto de ventas es 9.5% y la propina es 15%.
NO incline el impuesto sobre las ventas, solo sobre la cantidad de propina.
var output = calculateBillTotal(20);
console.log(output); // -> 24,9
*/

const calculateBillTotal = (preTaxAndTipAmount) => {

  let salesTax = preTaxAndTipAmount * 0.095;
  let tip = preTaxAndTipAmount * 0.15;
  
  let total = preTaxAndTipAmount + salesTax + tip;
  return total;

}

let output = calculateBillTotal(20);
console.log(output);

/*Ejercicio 16:
Escribe una función llamada convertScoreToGrade.

Dada una puntuación, convertScoreToGrade devuelve una cadena que representa el grado de letra correspondiente a la puntuación dada.

Notas:

(100 - 90) -> 'A'
(89 - 80) ->' B '
(79 - 70) -> 'C'
(69 - 60) -> 'D'
(59 - 0) -> 'F'
Si la puntuación dada es mayor que 100 o menor que 0, debe devolver 'PUNTUACION INVALIDA'.
var output = convertScoreToGrade(91);
console.log(output); // -> 'A'
*/

const convertScoreToGrade = (score) => {
  
  if ( score > 100 || score < 0 ) {
    return 'PUNTUACION INVALIDA';
  }
  
  if ( score >= 90 ) {
    return 'A';
  }else if ( score >= 80 ) {
    return 'B';
  }else if ( score >= 70 ) {
    return 'C';
  }else if ( score >= 60 ) {
    return 'D';
  }else{
    return 'F';
  }
  
}

let output = convertScoreToGrade(91);
console.log(output);