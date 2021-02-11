function setup() {
  createCanvas(400, 400);

  const a = [1, 2, 3, 4],
    b = [10, 20, 30, 40],
    arrLen = a.length + b.length,
    c = [];

  zipNewArr(a, b, c, arrLen);

  console.log(c);
}


const zipNewArr = (_a, _b, _c, _len) => {
  arr = {
    a: _a,
    b: _b,
    c: _c,
    len: _len
  };

  for (let idx = [0, 0]; idx[0] < arr.len - 1; idx[0] += 2) {
    arr.c[idx[0]] = arr.a[idx[1]];
    arr.c[idx[0] + 1] = arr.b[idx[1]];
    idx[1]++;
  }
}