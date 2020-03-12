var county;
var state;
const publicHealth = require("./publicHealth.json")

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    console.log("Geolocation is not supported by this browser.");
}

function showPosition(position) {
    const Http = new XMLHttpRequest();
    const url = `https://geo.fcc.gov/api/census/area?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`;
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        // console.log(Http.responseText)
         county = JSON.parse(Http.response).results[0].county_name;
         state = JSON.parse(Http.response).results[0].state_code;
    }
}

// for (var i = 0; i < obj.length; i++){
//     // look for the entry with a matching `code` value
//     if (publicHealth[i].CITY === county && publicHealth[i].STATE === state){
//       // obj[i].name is the matched result
//       console.log(publicHealth[i].NAME)
//     }
//   }

function getCountryByCode(county, state) {
    return data.filter(
      function(data) {
          if (data.STATE === state) {
            return data.CITY == county
          }
      }
    );
  }
  
  var found = getCountryByCode(county, state);
  
console.log(found[0].name);

