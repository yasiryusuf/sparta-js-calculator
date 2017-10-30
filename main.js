var typeOfCalculator = prompt("Enter a for Advanced Calculator, Enter b for Basic Calculator");
var num1 = parseFloat(prompt("Enter your First Number: "));
var answer;

if (typeOfCalculator == "a") {
  var operation = prompt("Type p for Power and s for Square Root");
} else if (typeOfCalculator == "b") {
  var operation = prompt("Choose an Operation (+,-,*,/)");
} else {
  console.log("Invalid Option");
}

if(operation == + || operation == - || operation == * || operation == / || operation == "p") {
  var num2 = parseFloat(prompt("Enter the Second Number: "));
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
