var county;
var state;
var found;
var location;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  console.log("Geolocation is not supported by this browser.");
}

function showPosition(position, county, state, found) {
  // location = position;
  console.log(position)
  const Http = new XMLHttpRequest();
  const url = `https://geo.fcc.gov/api/census/area?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`;
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    county = String(JSON.parse(Http.response).results[0].county_name).toUpperCase();
    state = String(JSON.parse(Http.response).results[0].state_code).toUpperCase();
    console.log(county)
    console.log(state)

    // $.getJSON("https://raw.githubusercontent.com/AirFusion45/SARS-CoV-2-Dashboard/master/publicHealth.json", function (data) {
    //   for (var i = 0; i < data.length; i++) {
    //     if ((data[i].COUNTY === county) && (data[i].STATE === state) && (data[i].NAME.indexOf("PUBLIC HEALTH") != -1)) {
    //       console.log(data[i])
    //       // document.getElementById("pubHealthDept").src = `https://www.google.com/search?q=%${data[i].WEBSITE}/&btnI=Im+Feeling+Lucky`;
    //       // document.getElementById("pubHealthDept").src = `https://www.cracking.com.ar/redir/redir.php?URL=${data[i].WEBSITE}`;
    //       document.getElementById("pubHealthDept").src = data[i].WEBSITE;
    //       break;
    //     }
    //   }
    // });
    
  }
}
