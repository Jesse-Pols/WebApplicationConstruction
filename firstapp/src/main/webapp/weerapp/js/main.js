var ipApiUrl = "https://ipapi.co/json/";
//var countryApi = "https://restcountries.eu/rest/v2/all";
var countryApi = "http://localhost:8080/firstapp/restservices/countries"
var openWeatherMapUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=15f8b16ba77633865f4a480cff38a0e3";

function initPage() {
	getRequest(ipApiUrl, function(x) {
		setOwnLocation(x);
		loadCountries();
		showWeather(x.latitude, x.longitude, x.city);
	});
}

function showWeather(latitude, longitude, city) {
	console.log("\nShowing Weather...");

	if (checkIfStored(city)) {
		let x = getFromStorage(city);
		if (x == null) {
			showUnstoredWeather(latitude, longitude, city);	
		} else {
			setCurrentWeather(x, city);	
		}
	} else {
		showUnstoredWeather(latitude, longitude, city);	
	}		
}

function showUnstoredWeather(latitude, longitude, city) {
	getRequest(openWeatherMapUrl + "&lat=" + latitude + "&lon=" + longitude, function(x) {
		saveToStorage(city, x);
		setCurrentWeather(x, city);
	});
}

function showWeatherByCurrentLocation() {
	let latitude = document.getElementById('latitude').innerHTML;
	let longitude = document.getElementById('longitude').innerHTML;
	let city = document.getElementById('stad').innerHTML;

	this.showWeather(latitude, longitude, city);
}

function loadCountries() {
	getRequest(countryApi, function(x){
		setTableData(x);
	});
}

function initModal() {
	let modal = document.getElementById("modal");
	let btn = document.getElementById("openModalAddCountry");
	let span = document.getElementsByClassName("close")[0];

	btn.onclick = function() {
	  modal.style.display = "block";
	}

	span.onclick = function() {
	  modal.style.display = "none";
	}

	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	}
}

initPage();
initModal();
