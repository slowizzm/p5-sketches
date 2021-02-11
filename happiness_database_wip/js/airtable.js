const api = 'https://api.airtable.com/v0/',
  app = 'appvV3l7yTLWkxzXo',
  table = 'happiness_table',
  api_key = 'YOUR_API_KEY',
  record = 'recF1OXeMCil6j1eV',
  sort_by = 'sort%5B0%5D%5Bfield%5D=created_at&sort%5B0%5D%5Bdirection%5D=asc'
api_put_record = `${api}${app}/${table}/${record}?&api_key=${api_key}`,
  api_get = `${api}${app}/${table}?${sort_by}&api_key=${api_key}`;

let db;

const getData = async _ => {
  const response = await fetch(api_get);
  const data = await response.json();

  // console.log(data.records);
  if (data.records.length == 0) return;
  db = data;
  useData();

  drawBarGraph(db);
}

const updateData = async _ => {
  const randomNum = Math.floor(Math.random() * 1000);
  const records = {
    fields: {
      name: upperCase(document.getElementById("username").value),
      joy_level: yourLevel,
      comment: document.getElementById("comment").value
    }
  }

  fetch(api_get, {
      method: 'post',
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