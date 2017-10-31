

var typeOfCalculator = prompt("Enter a for an advance calculator and b for a basic calculator");
var num1 = parseFloat(prompt("Please Enter Your First number: "));
var answer;

if(typeOfCalculator == "a") {
 var operation = prompt("Type p for power and s for square root");
}else if (typeOfCalculator == "b") {
 var operation = prompt("Choose an Operation: +,-,*,/");
}

if(operation == "+" || operation == "-" || operation == "*" || operation == "/" || operation == "p") {
 var num2 = parseFloat(prompt("Please Enter your Second Number: "));
 }

switch (operation) {
 case "+":
   answer = num1 + num2;
   break;
 case "-":
   answer = num1 - num2;
   break;
 case "*":
   answer = num1 * num2;
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
