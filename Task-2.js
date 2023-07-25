// Declare a function with parameter
function sumOfPositiveNumbers(numbers) {
    let sum = 0;
    //   Now Declare loop for Sum Of Positive Numbers
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        sum += numbers[i];
      }
    }
    return sum;
  }
// Output the function
  const inputArray = [2, -5, 10, -3, 7];
  const outputSum = sumOfPositiveNumbers(inputArray);
  console.log(outputSum); 
  