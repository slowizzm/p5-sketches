//array containing traditional function declaration in index 0
const arr1 = [
  function func() {
    console.log('myFunc');
  }
];


arr1[0]();


//array containing anonymous function declaration in index 0
const arr2 = [
  () => {
    console.log('anotherFunc');
  }
];

arr2[0]();