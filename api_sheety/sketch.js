//https://docs.google.com/spreadsheets/d/e/2PACX-1vTR4pU0bYraFTwAfi3pPDfGjneGhW5V4MoHDk1vYjJ0JzFROUynZ_lXLhd2VSGJ4nBaj6MhvvXsghcb/pubhtml


document.querySelector('button').addEventListener('click', _ => {
  updateData();
})



const api_get = 'https://api.sheety.co/9757aaaaabb95edf57ebfa77186c8996/p5Test/sheet1',
  api_put = 'https://api.sheety.co/9757aaaaabb95edf57ebfa77186c8996/p5Test/sheet1/2/';


const getData = _ => {
  fetch(api_get)
    .then(response => response.json())
    .then(json => {
      // console.log(json.sheet1[0]);
      document.querySelector('.num').innerHTML = `Num: ${json.sheet1[0].number}`;
    });
}


const updateData = _ => {
  const randomNum = Math.floor(Math.random() * 1000);
  const records = {
    sheet1: {
      number: randomNum
    }
  }

  fetch(api_put, {
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