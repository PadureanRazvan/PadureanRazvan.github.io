/// Site Project Javascript

//// Calculator app, finished!!

function calculate() {
	var a = parseInt(document.querySelector(".input1").value);
	var b = parseInt(document.querySelector(".input2").value);
	var op = document.querySelector(".select").value;

    var calculate;

    if (op == "Plus") {
    	calculate = a + b;
    }
        else if (op =="Minus") {
        	calculate = a-b;
        }
        else if (op == "Multiply") {
            calculate = a * b;
        }
        else if (op == "Divide") {
            calculate = a / b;
        }
         
        document.querySelector("#resultDiv").innerHTML = calculate
}

/// Rock Paper Scissors









/// Background gradient

var css = document.querySelector("#code");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function takeColor() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	/// Similar to .innerHTML I can use textContent to add a text in the HTML tag
	css.textContent = body.style.background + ";";
}
takeColor();
generateRandomColor();

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateRandomColor() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	takeColor();
}


color1.addEventListener("input", takeColor);

color2.addEventListener("input", takeColor);

// Alternative way to do this in HTML directly:
// adding: oninput="takeColor()"
// Example
// <input oninput="takeColor()" class="color1" type="color" name="color1" value="#00ff00">