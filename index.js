var value1 = document.querySelector(".value1");
var value2 = document.querySelector(".value2");

var add = document.querySelector("#add");
var subtract = document.querySelector(".subtract");
var divide = document.querySelector(".divide");
var multiply = document.querySelector(".multiply");

var resultText = document.querySelector(".result-text");

function valuesValidate() {
  if((isNaN(parseInt(value1.value)) || isNaN(parseInt(value1.value))) || (value1.value === "" || value2.value == "")){
    resultText.textContent = "Please input valid number in both fields";
    value1.value ="";
    value2.value ="";
    return;
  }
}

function addValues(){
  valuesValidate();
  var result = parseInt(value1.value) + parseInt(value2.value);
  resultText.textContent = result;
  value1.value ="";
  value2.value ="";
}

function subtractValues(){
  valuesValidate();
  var result = parseInt(value1.value) - parseInt(value2.value);
  resultText.textContent = result;
  value1.value ="";
  value2.value ="";
}

function divideValues(){
  valuesValidate();
  var result = parseInt(value1.value) / parseInt(value2.value);
  resultText.textContent = result;
  value1.value ="";
  value2.value ="";
}

function multiplyValues(){
  valuesValidate();
  var result = parseInt(value1.value) * parseInt(value2.value);
  resultText.textContent = result;
  value1.value ="";
  value2.value ="";
}

add.addEventListener("click", addValues);
subtract.addEventListener("click", subtractValues);
divide.addEventListener("click", divideValues);
multiply.addEventListener("click", multiplyValues);
