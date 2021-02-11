//one way
const multiArr_oneway = new Array(Math.ceil(Math.random() * 10));
for (let i = 0; i < multiArr_oneway.length; i++) multiArr_oneway[i] = new Array(Math.floor(Math.random() * 10));

console.log(multiArr_oneway);


//another way
const multiArr_anotherway = [],
  num_elements = Math.ceil(Math.random() * 10);
for (let i = 0; i < num_elements; i++) {
  multiArr_anotherway[i] = [];
  randomInnerLength = Math.ceil(Math.random() * 10);
  for (let j = 0; j < randomInnerLength; j++) {
    multiArr_anotherway[i][j] = Math.floor(Math.random() * 100);
  }
}

console.log(multiArr_anotherway);