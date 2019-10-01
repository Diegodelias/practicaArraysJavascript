/*

For the following exercises, you cannot sort your array. Be sure your solution works for any array that it is passed!

Exercise 3: Write a function which receives an array as a parameter and prints the lowest number in the array to the console.

Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the lowest number in the array printed in the console.  If not, investigate and fix.


*/

NumberArray = [23,43,44,767,1,11,87,9,65,45,21,10,8,4,3];

function printLowestNum(array){


   res = Math.min.apply(Math,NumberArray);


    return res;

}



let minNum =  printLowestNum(NumberArray);

console.log (minNum)


