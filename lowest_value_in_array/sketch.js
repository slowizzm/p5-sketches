const myArr = [],
  num_elements = 4;

for (let i = 0; i < num_elements; i++) {
  myArr[i] = Math.floor(Math.random() * 100)
}

(function indexOfLowestValueInArray(arr) {
  console.log(`lowest value: ${Math.min(...arr)}
at index: ${arr.indexOf(Math.min(...arr))}`);
})(myArr);