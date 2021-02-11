function getPass(pass) {
  pass();
}

function toPass() {
  console.log('hello');
}

function func(callback, arg) {
  callback(arg)
}



getPass(toPass);

  func((x) => {
    console.log(x);
    return x;
  }, 'world');