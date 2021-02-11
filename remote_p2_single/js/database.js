const api = 'https://api.airtable.com/v0/',
  app = 'appo003FeG1HukK4r',
  table = 'frames',
  api_key = 'YOUR_API_KEY',
  record = 'recDCT1beQ1Tix2jL',
  sort_by = 'sort%5B0%5D%5Bfield%5D=created_at&sort%5B0%5D%5Bdirection%5D=asc',
  api_get = `${api}${app}/${table}?${sort_by}&api_key=${api_key}`,
      api_put_record = `${api}${app}/${table}/${record}?&api_key=${api_key}`;;

const getData = async _ => {
  const response = await fetch(api_get);
  const data = await response.json();

  // console.log(data.records);
  db = data;
  if (data.records.length == 0) return;
  hasData = true;


  data.records.forEach(record => {
    records = record.id
  })
  
  console.log(records)
}
getData()

const updateData = async (col) => {
  const randomNum = Math.floor(Math.random() * 1000);
  const data = {
    fields: {
      name: 'frame_0',
      h: col[0],
      s: col[1],
      l: col[2],
      a: col[3],
    }
  }

  fetch(api_put_record, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {
      // console.log(json);
    });
}