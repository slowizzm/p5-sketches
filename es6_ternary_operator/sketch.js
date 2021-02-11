function setup() {
  createCanvas(400, 400);
  let herAge = int(random(20, 40));
  let hisAge = int(random(20, 40));

  console.log(`he is ${hisAge} and she is ${herAge}`);


  // if/else
  // if (hisAge > herAge) {
  //   console.log('he is older');
  // } else {
  //   console.log('she is older');
  // }


  //ternary operator
  (hisAge > herAge) ? console.log('he is older'): console.log('she is older');
}