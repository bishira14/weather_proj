window.addEventListener('load', function(){
let timezoneElement = document.querySelector('.timezone h2');
let temperatureElement = document.querySelector('.temperature h2');
let descriptionElement = document.querySelector('.temperature h3');
let iconElement = document.querySelector('img');
let tempDiv = document.querySelector('.temperature')
let degreeElement = document.querySelector('.temperature span');
let lat;
let long;


if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(position => {
  long = position.coords.longitude;
  lat = position.coords.latitude;
  let proxy = 'https://cors-anywhere.herokuapp.com/';
  let api = `${proxy}https://api.darksky.net/forecast/9e00d522da20f32ddb9cc5f341b5338a/${lat},${long}`;
  console.log(api);
  fetch(api)
  .then(response =>{
    return response.json();
  })
  .then(data => {
    console.log(data);
    let timezone = data.timezone;
    let temperature = data.currently.temperature;
    let summary = data.currently.summary;
    let icon = data.currently.icon;


   timezoneElement.textContent = timezone;
   temperatureElement.textContent = temperature;
   descriptionElement.textContent = summary;
   iconElement.style.background = `url(img/${icon}.jpg)center/cover no-repeat`;

   let celcius = Math.floor((temperature - 32) * (5/9));

   tempDiv.addEventListener('click', function(){
     if(degreeElement.innerHTML == 'F'){
       temperatureElement.textContent = celcius;
       degreeElement.innerHTML = 'C'
     }else{
       temperatureElement.textContent = temperature;
       degreeElement.innerHTML = 'F'
     }

   })

  })

  })
}


















})
