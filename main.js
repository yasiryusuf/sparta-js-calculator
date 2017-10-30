var typeOfCalculator = prompt("Enter a for Advanced Calculator, Enter b for Basic Calculator");
var num1 = parseFloat(prompt("Please Enter your First Number: "));
var answer;

if (typeOfCalculator == "a") {
  var operation = prompt("Type p for Power and s for Square Root");
} else if (typeOfCalculator == "b") {
  var operation = prompt("Choose an Operation (+,-,*,/)");
} else {
  console.log("Invalid Option");
}

if(operation == "+" || operation == "-" || operation == "*" || operation == "/" || operation == "s") {
 var number2 = parseFloat(prompt("Please Enter your Second number: "));

switch (operation) {
  case "+":
    answer = num1 + num2;
    break;
    case "-":
    answer = num1 + num2;
    break;
    case "*":
    answer = num1 - num2;
    break;
    case "/":
    answer = num1 / num2;
    break;
    case "p":
    answer = Math.pow(num1, num2);
    break;
    case "s":
    answer = Math.sqrt(num1);
    break;
    default:
    break;
}

alert(num1 + " " + operation + " " + num2 + " = " + answer);
