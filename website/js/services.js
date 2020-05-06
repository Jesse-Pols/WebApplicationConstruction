function writeDataToInnerHTML(id, data) {
	document.getElementById(id).innerHTML = data;
}

function formatDate(date) {
	return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

// https://gist.github.com/felipeskroski/8aec22f01dabdbf8fb6b
var degToCard = function(deg){
  if (deg>11.25 && deg<33.75){
    return "Noord, Noord-Oost";
  }else if (deg>33.75 && deg<56.25){
    return "Oost, Noord-Oost";
  }else if (deg>56.25 && deg<78.75){
    return "Oost";
  }else if (deg>78.75 && deg<101.25){
    return "Oost, Zuid-Oost";
  }else if (deg>101.25 && deg<123.75){
    return "Oost, Zuid-Oost";
  }else if (deg>123.75 && deg<146.25){
    return "Zuid-Oost";
  }else if (deg>146.25 && deg<168.75){
    return "Zuid, Zuid-Oost";
  }else if (deg>168.75 && deg<191.25){
    return "Zuid";
  }else if (deg>191.25 && deg<213.75){
    return "Zuid, Zuid-West";
  }else if (deg>213.75 && deg<236.25){
    return "Zuid-West";
  }else if (deg>236.25 && deg<258.75){
    return "West, Zuid-West";
  }else if (deg>258.75 && deg<281.25){
    return "West";
  }else if (deg>281.25 && deg<303.75){
    return "West, Noord-West";
  }else if (deg>303.75 && deg<326.25){
    return "Noord-West";
  }else if (deg>326.25 && deg<348.75){
    return "Noord, Noord-West";
  }else{
    return "Noord"; 
  }
}