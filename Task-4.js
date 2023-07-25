function findTwoNumbersWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return []; 
  }
  
  // Output the function
  const inputArray = [1, 3, 6, 8, 11, 15];
  const targetValue = 9;
  const resultIndices = findTwoNumbersWithSum(inputArray, targetValue);
  console.log(resultIndices);
  