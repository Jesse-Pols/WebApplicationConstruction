function createDeleteButton(code) {
    let deleteButton = document.createElement('input');
    deleteButton.type = "button";
    deleteButton.value = "Verwijderen";

    deleteButton.onclick = function() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          location.reload();
        }

        if (this.readyState == 4 && this.status == 500) {
            alert("Er is iets mis gegaan. Het land kon niet worden verwijdert.");
        }
      }
      xhttp.open("DELETE", countryApi + "/" + code + "/delete", true);
      xhttp.send();
    };

    return deleteButton;
}

function createUpdateButton(land, hoofdstad, regio, oppervlakte, inwoners, element) {
    let updateButton = document.createElement('input');
    updateButton.type = "button";
    updateButton.setAttribute("id", "updateButton" + element.name);
    updateButton.value = "Wijzigen";

    updateButton.onclick = function() {
        land.innerHTML = '<input type="text" value="' + element.name + '", id = "country' + element.name + '">';
        hoofdstad.innerHTML = '<input type="text" value = "' + element.capital + '", id = "capital' + element.name + '">';
        regio.innerHTML = '<input type="text" value = "' + element.region + '", id = "region' + element.name + '">';
        oppervlakte.innerHTML = '<input type="text" value = "' + element.surface + '", id = "surface' + element.name + '">';
        inwoners.innerHTML = '<input type="text" value = "' + element.population + '", id = "population' + element.name + '">';

        let tempUpdateButton = document.getElementById('updateButton' + element.name);
        let tempExecuteButton = document.getElementById('executeButton' + element.name);
        tempUpdateButton.style.display = "none";
        tempExecuteButton.style.display = "block";
    };
    return updateButton;
}

function createExecuteButton(name) {
    let executeButton = document.createElement('input');
    executeButton.type = "button";
    executeButton.setAttribute("id", "executeButton" + name);
    executeButton.style.display = "none";
    executeButton.value = "Doorvoeren";

    executeButton.onclick = function() {
        let land = document.getElementById('country' + name);
        let hoofdstad = document.getElementById('capital' + name);
        let regio = document.getElementById('region' + name);
        let oppervlakte = document.getElementById('surface' + name);
        let populatie = document.getElementById('population' + name);

        let data = {};
        data.oldname = name;
        data.name = land.value;
        data.capital = hoofdstad.value;
        data.region = regio.value;
        data.surface = oppervlakte.value;
        data.population = populatie.value;
        let json = JSON.stringify(data);

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                  location.reload();
            }

            if (this.readyState == 4 && this.status == 500) {
                alert("Er is iets mis gegaan. De update kon niet worden uitgevoerd.");
            }
        }
        xhttp.open("PUT", countryApi + "/" + json + "/update", true);
        xhttp.send();
    }

    return executeButton;
}

function setFlag(country) {
	var flag = document.getElementById("flag");
	if (country == null) {
		flag.style = "display: none;"
	} else {
		flag.style = "display: block;"
		flag.setAttribute("class", "flag-icon flag-icon-" + country.toLowerCase());
	}
}