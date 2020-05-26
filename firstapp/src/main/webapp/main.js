var url = "http://localhost:8080/firstapp/restservices/authentication";

function _logIn() {
    let data = {};
    data.username = "Jesse";
    data.password = "asd";
    let json = JSON.stringify(data);

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("Done");
        } else {
            alert("Failed");
        }
    }
    xhttp.open("POST", "http://localhost:8080/firstapp/authentication", true);
    xhttp.send(json);

}

function logIn(){
    post({username: 'Jesse', password: 'asd'});
}

/**
 * sends a request to the specified url from a form. this will change the window location.
 * @param {string} path the path to send the post request to
 * @param {object} params the paramiters to add to the url
 * @param {string} [method=post] the method to use on the form
 */

function post(params) {

  const form = document.createElement('form');
  form.method = 'post';
  form.action = url;

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const hiddenField = document.createElement('input');
      hiddenField.type = 'hidden';
      hiddenField.name = key;
      hiddenField.value = params[key];

      form.appendChild(hiddenField);
    }
  }

  document.body.appendChild(form);
  form.submit();
}
/*
window.addEventListener("load", function() {
    function sendData() {
        const XHR = new XMLHttpRequest();
        const FD = new FormData(form);
        XHR.addEventListener("load", function(event) {
            console.log(event);
            //alert(event.target.responseText);
        });

        XHR.addEventListener("error", function(event) {
            alert("Oops! Something went wrong.")
        });
        XHR.open("POST", url);
        XHR.send(FD);
    }

    const form = document.getElementById("myForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        sendData();
    });
});

function thing() {
    let data = {};
    data.username = "Jesse";
    data.password = "asd";
    let json = JSON.stringify(data);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
//              location.reload();
                alert("Logged in!");
        }

        if (this.readyState == 4 && this.status == 500) {
            alert("Er is iets mis gegaan.");
        }
    }
    xhttp.open("POST", "http://localhost:8080/firstapp/authentication", true);
    xhttp.send();
    alert("Logging in...");
}
*/