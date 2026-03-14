function convertTemp(){

let temp = document.getElementById("tempInput").value;
let unit = document.getElementById("unit").value;
let result = document.getElementById("result");

if(temp === ""){
result.innerHTML = "Please enter a temperature!";
return;
}

temp = Number(temp);
let converted;

if(unit === "celsius"){
converted = (temp * 9/5) + 32;
result.innerHTML = temp + " °C = " + converted.toFixed(2) + " °F";
}

else if(unit === "fahrenheit"){
converted = (temp - 32) * 5/9;
result.innerHTML = temp + " °F = " + converted.toFixed(2) + " °C";
}

else if(unit === "kelvin"){
converted = temp - 273.15;
result.innerHTML = temp + " K = " + converted.toFixed(2) + " °C";
}

}