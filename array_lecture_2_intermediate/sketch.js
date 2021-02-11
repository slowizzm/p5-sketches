/* 

Arrays can contain different data types

Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

*/

const arr1 = [20, 108.42],

      //object
  arr2 = [{
    name: '44'
  }],

      //string
  arr3 = ['hello'],

      //function
  arr4 = [_ => {
    console.log('ran func')
  }],

      // spread operator
  arr5 = [...arr1, ...arr2, ...arr3, ...arr4];

console.log(arr5);



(function f() {
  return arr5[4]();
})();


// initalize array with elements
const arrayInitWithElements = Array.apply(null, Array(10)).map((x, i) => 3);

console.log(arrayInitWithElements)