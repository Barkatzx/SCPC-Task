function findSecondSmallest(numbers) {
    if (numbers.length < 2) {
      throw new Error("Array must contain at least two numbers.");
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < smallest) {
        secondSmallest = smallest;
        smallest = numbers[i];
      } else if (numbers[i] < secondSmallest && numbers[i] !== smallest) {
        secondSmallest = numbers[i];
      }
    }
  
    if (secondSmallest === Infinity) {
      throw new Error("There is no second smallest element in the array.");
    }
  
    return secondSmallest;
  }
  
  const inputArray = [5, 3, 9, 1, 7, 2];
  const secondSmallestElement = findSecondSmallest(inputArray);
  console.log(secondSmallestElement); 
  