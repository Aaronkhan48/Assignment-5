var lheight = 1.69;
var lmass = 78;
var pheight = 1.95;
var pmass = 92;

var bmL = (78)/(1.69*1.69);
var bmP = (92)/(1.95*1.95);
var lucasHigherBMI = Boolean(bmL > bmP);

console.log("The BMI of Petter is " + bmP + ", The BMI of Lucas is " + bmL + ", Petter's BMI is higher than Lucas's BMI that is " + !lucasHigherBMI);


var cel = 30;
var convert = (cel * (9/5)) +32;
var far = 99;
var convert2 = (far -32) * (5/9);

console.log(`${cel}°C is ${convert}°F`);
console.log(`${far}°F is ${convert2}°C`);

if(bmP > bmL){
    console.log(`Petter BMI (${bmP}) is higher than Lucas' (${bmL})!`);
}else{
    console.log(`Lucas' BMI (${bmL}) is higher than Petter (${bmP})!`);
}


var ConvertCelsiusToFahrenehit = (cel2) => {console.log(`${cel2}°C is ${((cel2 * (9/5)) +32)}°F`)};

var ConvertFahrenehitToCelsius = (far2) => {console.log(`${far2}°F is ${((far2 - 32) * (5/9))}°C`)};

ConvertCelsiusToFahrenehit(100);
ConvertCelsiusToFahrenehit(0);
ConvertCelsiusToFahrenehit(10);

ConvertFahrenehitToCelsius(32);
ConvertFahrenehitToCelsius(10);
ConvertFahrenehitToCelsius(102);
