let a = Number(prompt("Enter your first number"));
let b = Number(prompt("Enter your second number"));

if (isNaN(a) || isNaN(b)) {
  document.write("Please enter valid numbers.");
} else {
  let sum = a + b;
  let difference = a - b;
  let quotient = b !== 0 ? a / b : "Undefined (division by zero)";
  let remainder = b !== 0 ? a % b : "Undefined (division by zero)";
  let product = a * b;
  let increment = ++a; // a is now a number, so this is safe

  document.write("Sum = ", sum, "<br>");
  document.write("Difference = ", difference, "<br>");
  document.write("Remainder = ", remainder, "<br>");
  document.write("Quotient = ", quotient, "<br>");
  document.write("Multiply = ", product, "<br>");
  document.write("Increment of First number = ", increment, "<br>");
}