(() => {

  /* Excercises */

  /* First excercise */
  
  let numbers = [1, 2, 3, 4, 5];
  
  /* Multiplique los numeros del arreglo por 5 */

  /*Resultado esperado: [5, 10, 15, 20, 25] */

  let multipliedNumbers = numbers.map(num => num * 5);
  console.log("Resultado del primer ejercicio:", multipliedNumbers);

  /* Second excercise */

  let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];

  /* Ordernar los nombres alfabeticamente */

  /* Resultado esperado: ["Daniel", "Jhosep", "Rodrigo", "Veronica"] */
  let sortedNames = names.sort();
  console.log("Resultado del segundo ejercicio:", sortedNames);

  /* Second excercise */

  /* Thrid excercise */

  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];

  /* Dado un arreglo, crear otro sin letras repetidas */
  /* Resultado esperado: ['a', 'b', 'z', 'r', 'c'] */
  let uniqueLetters = Array.from(new Set(data));
  console.log("Resultado del tercer ejercicio:", uniqueLetters);
 

  /* Fourth excercise */

  const largeWord = "abcdabcdABCD";

  /* Dado un string mostrar cuantas veces se repite cada letra*/
  /* Resultado: 
    {
      a: 2,
      b: 2,
      c: 2,
      d: 2,
      A: 1,
      B: 1,
      C: 1,
      D: 1
    }
  */
    let letterCount = {};
    for (let letter of largeWord) {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
    console.log("Resultado del cuarto ejercicio:", letterCount);

  /* Fourth excercise */

})();
