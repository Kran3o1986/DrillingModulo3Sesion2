function convert(unit, checkbox) {
    var bigTemp = document.getElementById("bigTemp");
    var bigC = document.getElementById("bigC");
    var sun = document.getElementById("sun");
    var mon = document.getElementById("mon");
    var tue = document.getElementById("tue");
    var wed = document.getElementById("wed");
    var thu = document.getElementById("thu");
    var fri = document.getElementById("fri");
    var sat = document.getElementById("sat");
    var temps = [bigTemp, sun, mon, tue, wed, thu, fri, sat];
    
    for (var i = 0; i < temps.length; i++) {
      var temp = temps[i].getAttribute("value");
      if (unit === "user") {
        if (checkbox.checked) {
          var fahrenheit = (parseFloat(temp) * 1.8) + 32;
          temps[i].textContent = fahrenheit.toFixed(1);
          bigC.textContent = "°F";
        } else {
          temps[i].textContent = temp;
          bigC.textContent = "°C";
        }
      } else {
        if (bigC.textContent === "°F") {
          var celsius = (parseFloat(temp) - 32) / 1.8;
          temps[i].textContent = celsius.toFixed(1);
        } else {
          temps[i].textContent = temp;
        }
      }
    }
  }
  