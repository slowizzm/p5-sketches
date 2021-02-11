/*

- Array
  •  An array stores multiple values within a single variable name. 
  •  The simplest way to make an array is to create it with the values you want. 
  •  Instead of three separate variables:

    let x1 = 3;
    let x2 = 6;
    let x3 = 9;

  •  You can create an array to store all three values:

    const x = [ 3, 6, 9 ];

    x[0]
    x[1]
    x[2]

  •  Once you have an array, you can get its size with the length field

    const numbers = [ 9, 2, 3, 4, 1, 6, 3, 8, 4 ];
    console.log(numbers.length);


  •  You can see its array values in the console with console.log():

    const numbers = [ 9, 2, 3, 4, 1, 6, 3, 8, 4 ];
    console.log(numbers);


  •  The brackets [ and ] are the characters used to define an array. Now we need 
     to be precise about the braces { and }, parentheses ( and ) and brackets [ and ] 

  •  You can make an array of anything, any data type:

    const arrayname = [ true, false, true ];  // Array of three booleans

    const arrayname = [ 1.0, 2.34, 6.28 ];  // Array of three floats

    const arrayname = [ "Desiree", "Andrew", "Shelly" ];  // Array of three Strings

    const arrayname = [ { x : 42, y : 9000 } ];  // Array of objects

    const arrayname = [ { x : 42, y : 9000 }, 33, 'hello', 9000.1, 'a' ];  // Array of multiple data types

*/

const arrayname = [33, 'hello', 9000.1, 'a']; // Array of multiple data types

console.log(arrayname[2])