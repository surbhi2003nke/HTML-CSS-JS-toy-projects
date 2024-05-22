// Temperature conversion programm

const inputtemp = document.getElementById("inputtemp");
const tocelcius = document.getElementById("tocelcius");
const tofahrenheit = document.getElementById("tofahrenheit");
const submitbtn = document.getElementById("submitbtn");
const result = document.getElementById("result");

// let temperature = (inputtemp.value);
// console.log(temperature)

submitbtn.onclick = function() {
    let temperature = Number(inputtemp.value);
    if(tocelcius.checked){
        temperature = (temperature-32)*(5/9);
        result.textContent = temperature.toFixed(2) + " °C";
        
    }else if(tofahrenheit.checked) {
        temperature = (temperature*(9/5))+32;
        result.textContent = temperature.toFixed(2) + " °F";
    }
}
