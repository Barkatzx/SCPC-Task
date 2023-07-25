// Declare a function with parameter
function reverseString(inputString) {
  let reversedString = "";
//   Now Declare loop for reverse string
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString.charAt(i);
  }
  return reversedString;
}

// Output the function
const inputStr = "Programmming Hero";
const outputStr = reverseString(inputStr);
console.log(outputStr);
