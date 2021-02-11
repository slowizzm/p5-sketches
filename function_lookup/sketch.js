const lookupTable = val => {
  const lookup = {
    0: _ => {
      return 'zero';
    },
    1: _ => {
      return 'one';
    },
    2: _ => {
      return 'two';
    },
    3: _ => {
      return 'three';
    },
    4: _ => {
      return 'four';
    },
    5: _ => {
      return 'five';
    }
  };

  if (typeof lookup[val] !== 'function') return console.log(`${val} is not in table`);

  return {
    x: lookup[val](),
    y: Object.keys(lookup).length
  };
}

let num = Math.floor(Math.random() * lookupTable(0).y)

console.log(lookupTable(num).x);