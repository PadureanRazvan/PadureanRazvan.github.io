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
var body = document.querySelector(".gg")


function takeColor() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	/// Similar to .innerHTML I can use textContent to add a text in the HTML tag
	css.textContent = body.style.background
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

/////LOGIN 

const database = [{
    username: "user1",
    password: "password1"
},
{
    username: "user2",
    password: "password2"
}]



function userValid(username, password) {
    for ( i = 0; i < database.length; i++) {
        if ( database[i].username === username && database[i].password === password) {
            return true;
        }
    }
   return false
}

var outputLog = document.querySelector("#log");

function logIn() {
    let username = document.querySelector("#user").value;
    let password = document.querySelector("#pass").value;
  if (userValid(username, password)) {
    outputLog.innerHTML = "Acces Granted";
  } else {outputLog.innerHTML = "Access Denied"}
}




//// calculator

function insert(num) {
  document.form.textview.value = document.form.textview.value+num;
 }
 function equal() {
  var exp = document.form.textview.value;
  if (exp) {
   document.form.textview.value = eval(exp);
  }
 }
 
 function clean() {
  document.form.textview.value = "";
 }
 
 function back() {
  var exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0,exp.length-1);
 }


 /// Rock Paper Scissors

 var playerOption = document.querySelector("#player-select");
var computerOption = document.querySelector("#computer-select");
var computerSelected = computerOption.getElementsByTagName("option");
var computerIndex = Math.floor(Math.random() * computerSelected.length);
var playerResult = document.querySelector("#playerResult")
var computerResult = document.querySelector("#computerResult")


var gameResult = document.querySelector("#result");
var button = document.querySelector("button")

function run() {
	computerOption.selectedIndex = computerIndex;
	if (computerIndex.value === 1) {
		computerSelected.value === "Rock"
	} else if (computerIndex.value === 2) {
		computerSelected.value === "Paper"
	} else if (computerIndex.value === 3) {
		computerSelected.value === "Scissors"
	} 
gameRules();

if ( gameResult.textContent === "Player wins") {
   parseInt(playerResult).innerHTML = playerResult + 1;
   playerResult.textContent = playerResult;
} 

computerIndex = Math.floor(Math.random() * computerSelected.length);
}

function gameRules() {
	if ( playerOption.value === "Rock" && computerOption.value === "Rock") {
	gameResult.value = "Draw";
	} else if ( playerOption.value === "Scissors" && computerOption.value === "Scissors" ) {
    gameResult.textContent = "Draw";
} else if (playerOption.value === "Paper" && computerOption.value === "Paper") {
	gameResult.textContent = "Draw";
} else if (playerOption.value === "Rock" && computerOption.value === "Scissors") {
	gameResult.textContent = "Player wins";
} else if (playerOption.value === "Rock" && computerOption.value === "Paper") {
	gameResult.textContent = "Computer wins";
} else if ( playerOption.value === "Paper" && computerOption.value ==="Rock") {
    gameResult.textContent = "Player wins";
} else if ( playerOption.value === "Paper" && computerOption.value === "Scissors") {
	gameResult.textContent ="Computer wins";
} else if (playerOption.value === "Scissors" && computerOption.value === "Rock") {
	gameResult.textContent = "Computer wins";
} else if ( playerOption.value === "Scissors" && computerOption.value === "Paper") {
	gameResult.textContent = "Player wins";
} else {
	gameResult.textContent = "Something is wrong"
}
}