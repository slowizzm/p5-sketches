const graph = {
  top: 110,
  bottom: 0,
  left: -300,
  right: -500,
  domainMin: 0,
  domainMax: 10,
  barWidth: 20
}

const bar = document.querySelectorAll('.bar');
const barText = document.querySelectorAll('.bar-text');

const lev = [];
for (let i = 0; i < 10; i++) {
  lev[i] = []
}

function drawBarGraph(data) {

  for (let i = 0; i < bar.length; i++) {
    let x = map_range(i, 0, bar.length - 1, graph.left, graph.right);
    bar[i].style.x = `${x}px`
    barText[i].innerHTML = `${i+1}`;
    barText[i].setAttribute('x', `${(x*-1)-15}`);
    barText[i].setAttribute('y', '350px')

  }

  data.records.forEach((d) => {
    lev[d.fields.joy_level - 1].push(1);
    bar[d.fields.joy_level - 1].style.height = `${lev[d.fields.joy_level-1].length*20}px`;
  })
}

function map_range(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}