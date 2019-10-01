/*
Exercise 6: Write a function which receives an array and only prints the values that repeat.  

For example, given the following array and index, the function will print '6,23,33,100'.

var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; 
Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see an array of the repeated numbers printed in the console.  If not, investigate and fix.


-filter crea  un array nuevo de elementos que pasan el condicional si se cumple la condicion retorna true y se incluira en el array



Returns -1 if the item is not found.
If the item is present more than once, the indexOf method returns the position of the first occurence.
*/

var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]


var resultado = array.filter((elemento,index)=>{return array.indexOf(elemento) != index

}); 

console.log(resultado);



/** 
  si elemento esta repetido indexof va devolver la posicion de la primera repeticion del elemento que será distinta  a  la posicion de la segunda repetición se cumple la condición de que sea distinto y se agrega el elemento al array
 
-filter crea  un array nuevo de elementos que pasan el condicional si se cumple la condicion retorna true y se incluira en el array

 * The indexOf() method searches the array for the specified item, and returns its position.
The search will start at the specified position, or at the beginning if no start position is specified, and end the search at the end of the array.

Returns -1 if the item is not found.
If the item is present more than once, the indexOf method returns the position of the first occurence.
*/