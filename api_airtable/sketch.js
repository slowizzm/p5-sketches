const api = 'https://api.airtable.com/v0/',
  app = 'YOUR_APP',
  table = 'YOUR_TABLE',
  api_key = 'YOUR_API_KEY',
  record = 'YOUR_RECORD',
  api_get = `${api}${app}/${table}?&api_key=${api_key}`,
  api_put_record = `${api}${app}/${table}/${record}?&api_key=${api_key}`;


//button calls updateData() when clicked
document.querySelector('button').addEventListener('click', _ => {
  updateData();
});


//function to get data from database
const getData = async _ => {
  const response = await fetch(api_get);
  const data = await response.json();

  data.records.forEach(data => {
    // console.log(data);
    document.querySelector('.num').innerHTML = `Num: ${data.fields.num}`;
  });
}


//function to update (PUT) record, also calls getData()
const updateData = async _ => {
  const randomNum = Math.floor(Math.random() * 1000);
  const records = {
    fields: {
      num: randomNum
    }
  }

  fetch(api_put_record, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(records)
    })
    .then(response => response.json())
    .then(json => {
      // console.log(json);
      getData();
    });
}

getData();