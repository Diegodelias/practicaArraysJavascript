/*Exercise 1: Create an array with all the names of your class (including mentors).  Sort the array alphabetically.  Print the first element of the array in the console.  Print the last element of the array in the console.  Print all the elements of the array in the console.  Use a "for" loop.

Save the file and reload the page. You should see the first element of the sorted array, the last element of the sorted array, and a list of all the elements in order in the array in the console.
*/

console.log("Excercise 1")
var names =["Miguelito","Juancito", "Pepe", "Joaquin", "Maria","Carlos","Jacinta","Lucrecia","Zoilo"]
names = names.sort();
console.log("First name of array: " + names[0])

console.log("Last name of array: " + names[names.length-1])

for(var i = 0; i < names.length; i++){

    console.log(names[i]);
}


/*
console.log("All the elements of the array:")
names.forEach(name =>{
    console.log(name);


});
*/