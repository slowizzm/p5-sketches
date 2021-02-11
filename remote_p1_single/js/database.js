const api = 'https://api.airtable.com/v0/',
  app = 'appo003FeG1HukK4r',
  table = 'frames',
  api_key = 'YOUR_API_KEY',
  records = ['recRqTZ3Bse7bTxft'],
  sort_by = 'sort%5B0%5D%5Bfield%5D=created_at&sort%5B0%5D%5Bdirection%5D=asc'
api_put_record = `${api}${app}/${table}/${records[0]}?&api_key=${api_key}`,
  api_get = `${api}${app}/${table}?${sort_by}&api_key=${api_key}`;

let db;
let hasData = false;

const getData = async _ => {
  const response = await fetch(api_get);
  const data = await response.json();

  // console.log(data.records);
  db = data;
  if (data.records.length == 0) return;
  hasData = true;

}
getData();