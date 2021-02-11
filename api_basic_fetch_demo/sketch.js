const api_cat = 'https://api.thecatapi.com/v1/images/search?size=full';


// //button calls getData() when clicked
document.querySelector('button').addEventListener('click', _ => {
  getData();
});

//function to get data from database
const getData = async _ => {
  const response = await fetch(api_cat);
  const data = await response.json();

  // console.log(data[0].width, data[0].height)

  //get image in resolution range of 600px-800px width by 600px-800px height
  if (data[0].width >= 600 && data[0].height >= 600 && data[0].width <= 800 && data[0].height <= 800) {
    document.getElementById("myImg").src = data[0].url;
  } else {
    getData();
  }
}

getData();