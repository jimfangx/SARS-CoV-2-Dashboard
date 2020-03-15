var county;
var state;
var found;
var location;
var outsideUS;
var stateVal;

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
  // const url = `https://geo.fcc.gov/api/census/area?lat=29.774884&lon=-82.424085&format=json`;
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    county = String(JSON.parse(Http.response).results[0].county_name).toUpperCase();
    state = String(JSON.parse(Http.response).results[0].state_code).toUpperCase();
    stateVal = String(JSON.parse(Http.response).results[0].state_name);
    // console.log(county)
    // console.log(state)
    // console.log(Http.response)
    // console.log("JSDFLKFJLK" + JSON.parse(Http.response))
    $.getJSON("https://raw.githubusercontent.com/AirFusion45/SARS-CoV-2-Dashboard/master/stateHealth.json", function (data) {
      if (data[state].HTTPS === false) {
        document.getElementById("modalContents").innerHTML = `We were unable to display your state's public health department's website.<br>${stateVal}'s public health department's COVID19 website is <a target="_blank" href="${data[state].WEBSITE}">${data[state].WEBSITE}</a><br>Please visit your local public health department for more information.<br>Error: HTTP & HTTPS mixed active content block. State's website is using HTTP.`
        $('#ex1').modal();
        $("#pubHealthDept").remove();
        $(".column-right").append(`<iframe id="pubHealthDeptCustom" src="https://www.cdc.gov/coronavirus/2019-ncov/index.html"></iframe>`)
      } else if (data[state].HTTPS === true) {
        $("#pubHealthDept").remove();
        $(".column-right").append(`<iframe id="pubHealthDeptCustom" is="x-frame-bypass" src="${data[state].WEBSITE}"></iframe>`)
      }
    })
  }
}
