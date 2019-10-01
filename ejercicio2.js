/*Exercise 2: Create an array with all the ages of the students in your class.  Iterate the array using a while loop, and then print every age in the console.  Add a conditional inside the while loop to only print even numbers.  Change the loop to use a "for" loop instead of a "while" loop.

Save your changes to your JavaScript file. Reload the HTML page in your browser. You should see every age printed, then only the even numbers printed.  If not, investigate and fix.
*/



console.log("Excercise 2")
var ages = [27,33,34,22,19,20,25,28,29,21,26]
var i=0;
long = ages.length;



console.log ("Using while, all the ages ")
while( i< long){

    
    console.log(ages[i]);
    
    
    i++;
}


console.log("Using FOR, all ages")

for (var i= 0 ; i <= long; i++ ){

        console.log(ages[i]);

    }








var i=0;

console.log ("Using while, even ages ")
while( i < long){

    if (ages[i] % 2 === 0){
    console.log(ages[i]);
    }
    
    i++;
}





console.log("Using FOR, even ages")
for (var i= 0 ; i <= long; i++ ){


    if (ages[i] % 2 === 0){
        console.log(ages[i]);
        }
        

    }


