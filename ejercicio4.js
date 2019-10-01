/*Exercise 4: Write a function which receives an array as a parameter and prints the biggest number in the array to the console.

Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the biggest number in the array printed in the console.  If not, investigate and fix.*/


NumArray = [23,6,1111113,43,44,767,11,87,9,65,45,21,10,8,4];



let max = (array)=> Math.max.apply(null,array)

console.log(max(NumArray));