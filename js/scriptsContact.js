window.addEventListener("load", function () {
  function sendData() {
    var XHR = new XMLHttpRequest();

    var FD = new FormData(form);

    XHR.addEventListener("load", function(event) {
      alert(event.target.responseText);
    });

    XHR.addEventListener("error", function(event) {
      alert('Oops! Something went wrong.');
    });

    XHR.open("POST", "https://example.com/cors.php");

    XHR.send(FD);
  }

  var form = document.getElementById("myForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    sendData();
  });
});

//note that this function does not execute as I do not have an
//email to send it to, however it will return an error alert
