function setOwnLocation(data) {
	writeDataToInnerHTML("landcode", data.country_code);
	writeDataToInnerHTML("land", data.country_name);
	writeDataToInnerHTML("regio", data.region);
	writeDataToInnerHTML("stad", data.city);
	writeDataToInnerHTML("postcode", data.postal);
	writeDataToInnerHTML("latitude", data.latitude);
	writeDataToInnerHTML("longitude", data.longitude);
	writeDataToInnerHTML("ip", data.ip);
}

function setCurrentWeather(data, city) {
	writeDataToInnerHTML("currentCity", city);
	writeDataToInnerHTML("temperatuur", Math.round((data.main.temp) * 10) / 10);
	writeDataToInnerHTML("luchtvochtigheid", data.main.humidity);
	writeDataToInnerHTML("windsnelheid", data.wind.speed);
	writeDataToInnerHTML("windrichting", degToCard(data.wind.deg));
	writeDataToInnerHTML("zonsopgang", formatDate(new Date(data.sys.sunrise)));
	writeDataToInnerHTML("zonsondergang", formatDate(new Date(data.sys.sunset)));

	var flag = document.getElementById("flag");
	if (data.sys.country == null) {
		flag.style = "display: none;"
	} else {
		flag.style = "display: block;"
		flag.setAttribute("class", "flag-icon flag-icon-" + data.sys.country.toLowerCase());		
	}
}

function setTableData(data) {
	var table = document.getElementById("countryTable");
	for (let element of data) {
		table = setTableRow(table, element);
	}	
}

function setTableRow(table, element) {
	let row = table.insertRow();
	let land = row.insertCell();
	let hoofdstad = row.insertCell();
	let regio = row.insertCell();
	let oppervlakte = row.insertCell();
	let inwoners = row.insertCell();

	land.innerHTML = element.name;
	hoofdstad.innerHTML = element.capital; 
	regio.innerHTML = element.region;
	oppervlakte.innerHTML = element.area;
	inwoners.innerHTML = element.population;

	row.classList.add('hoverable');

	row.onclick = function() {
		if (element.capital == null || element.capital == "") {
			showWeather(element.latlng[0], element.latlng[1], element.name);
		} else {
			showWeather(element.latlng[0], element.latlng[1], element.capital);	
		}					
	}

	return table;
}