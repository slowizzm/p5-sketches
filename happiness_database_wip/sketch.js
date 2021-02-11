inputValidation();


function useData() {
  const levels = [];
  const recs = [];
  for (let i = 0; i < 10; i++) levels.push(0);

  db.records.forEach(data => {
    recs.push(data);
    let currLevel = data.fields.joy_level - 1;
    levels[currLevel] = levels[currLevel] + 1;
  });

  let lastRecord = db.records[db.records.length - 1];
  let levelWithMost = levels.indexOf(Math.max(...levels)) + 1;

  // console.log(lastRecord.fields.name);
  //   console.log(Math.max(...levels));

  document.querySelector('.last-user').innerHTML = `Last User: ${lastRecord.fields.name}`;
  info.innerHTML = `Most users selected level ${levelWithMost}`;

  let d = lastRecord.fields.joy_level;

  if (d > 0 || d < 10) {
    getLevel(lastRecord.fields.joy_level - 1);
  }
}




getData();