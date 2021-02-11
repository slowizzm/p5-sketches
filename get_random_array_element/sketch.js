// vanilla js
const arr = [0, 1, 2, 3],
  rnd = Math.floor(Math.random() * arr.length);

console.log(`vanilla: ${arr[rnd]}`);


// p5.js
setup = _ => {
  const myArr = [3, 6, 9, 12, 18];
  const rnd_idx = floor(random(myArr.length));
  console.log(`p5: ${myArr[rnd_idx]}`);
}