// Set this variable to a starting Fahrenheit temperature...
var fahrenheit = 68;

// Enter conversion code below...
var fahrenheitToCelsius = (fahrenheit - 32) / 1.8;
var fahrenheitToKelvin = (fahrenheit +459.67) / 1.8;

// Enter console.log statements below...
console.log("Starting Temperature:"+ fahrenheit + "F");
console.log("Converted To Celsius:"+ fahrenheitToCelsius + "C");
console.log("Converted To Kelvin:"+ fahrenheitToKelvin + "K")
// Repeat the above for Celsius and Kelvin...
var celsius = 0;
var celsiustofahrenheit = (celsius * 1.8+32)
var celsiustokelvin = (celsius + 273.15)
console.log("Starting Temperature:"+ celsius + "C")
console.log("Converted To fahrenheit:"+ celsiustofahrenheit + "F")
console.log("Converted to kelvin:" + celsiustokelvin + "K")

var kelvin = 273.15;
var kelvintofahrenheit = (kelvin * 1.8 - 459.67)
var kelvintocelsius = (kelvin - 273.15)
console.log("Starting Temperature"+ celsius + "C")
console.log("Converted To fahrenheit:"+ kelvintofahrenheit + "F")
console.log("converted To Celsius:" + kelvintocelsius + "C")


'$ node temp_converter.js'