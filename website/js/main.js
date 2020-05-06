var ipApiUrl = "https://ipapi.co/json/";
var countryApi = "https://restcountries.eu/rest/v2/all";
var openWeatherMapUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=15f8b16ba77633865f4a480cff38a0e3";

var getRequest = function(url, func) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var data = JSON.parse(this.responseText);
			func(data);
		}
	}
	xhttp.open("GET", url, true);
	xhttp.send();
}

function initPage() {
	getRequest(ipApiUrl, function(x) {
		setOwnLocation(x);
		loadCountries();
		showWeather(x.latitude, x.longitude, x.city);
	});
}

function showWeather(latitude, longitude, city) {
	getRequest(openWeatherMapUrl + "&lat=" + latitude + "&lon=" + longitude, function(x) {
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

function sortAlphabetic(id) {

}

initPage();
