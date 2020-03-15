if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    console.log("Geolocation is not supported by this browser.");
}

function showPosition(position, county, state, found) {
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
        var countySelected;
        $.getJSON("https://raw.githubusercontent.com/AirFusion45/SARS-CoV-2-Dashboard/master/stateHealth.json", function (dataState) {
            $.getJSON("https://raw.githubusercontent.com/AirFusion45/SARS-CoV-2-Dashboard/master/publicHealth.json", function (dataCounty) {


                if (county === undefined && state === undefined) {
                    document.getElementById("location").innerHTML = `You are currently not in the United States or minor outlying islands or your location is not accessible. Please visit the <a href: "https://who.int/coronavirus">WHO's website</a> for more information.`
                } else {
                    for (var i=0; i<dataCounty.length; i++) {
                        if ((dataCounty[i].STATE===state) && (dataCounty[i].COUNTY===county)) {
                            countySelected=i;
                            break;
                        }
                    }
                    document.getElementById("location").innerHTML = `You are in ${county}, ${stateVal.toUpperCase()}. Below are your state and county's public health department's information:<br><br><b>${dataState[state].NAME}</b><br>Address: ${dataState[state].ADDRESS}${dataState[state].ADDRESS2==="" ? "":" "+dataState[state].ADDRESS2}, ${dataState[state].CITY}, ${dataState[state].STATE}${dataState[state].ZIP}<br>Website: <a target="_blank" href="${(dataState[state].WEBSITE)}">${dataState[state].WEBSITE}</a><br>Telephone (May not be 100% accurate): ${dataState[state].TELEPHONE}<br><br><b>${dataCounty[countySelected].NAME} (May not be 100% accurate)</b><br>Address: ${dataCounty[countySelected].ADDRESS}${dataCounty[countySelected].ADDRESS2==="" ? "":" "+dataCounty[countySelected].ADDRESS2}, ${dataCounty[countySelected].CITY}, ${dataCounty[countySelected].STATE}${dataCounty[countySelected].ZIP}<br>Website: <a target="_blank" href="${dataCounty[countySelected].WEBSITE}">${(dataCounty[countySelected].WEBSITE).toLowerCase()}</a><br>Telephone: ${dataCounty[countySelected].TELEPHONE}`
                }
            })
        })
    }
}