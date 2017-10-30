var typeOfCalculator = prompt("Enter a for Advanced Calculator, Enter b for Basic Calculator");
var num1 = parseFloat(prompt("Enter your First Number: "));

if (typeOfCalculator == a) {
  var operation = prompt("Type p for power and s for square root");
} else if (typeOfCalculator == b) {
  var operation = prompt("Type operation (+,-,*,/)");
} else {
  console.log("Invalid Option");
}

switch (operation) {
  case "+""-","/","*","s","p":
      var number2 = parseFloat(prompt("Enter second Number"));
    break;
    case "+":
    answer = number1 + number2;
    break;
    case "-":
    answer = number1 - number2;
    break;
    case "/":
    answer = number1 / number2;
    break;
    case "*":
    answer = number1 * number2;
  default:
    console.log(operation);
}
