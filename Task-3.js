function mostFrequentElement(arr) {
    // Create an object to store the frequency of each element
    const frequencyMap = {};
  
    // Calculate the frequency of each element in the array
    arr.forEach((num) => {
      frequencyMap[num] = frequencyMap[num] ? frequencyMap[num] + 1 : 1;
    });
  
    // Find the element with the highest frequency
    let mostFrequent = arr[0];
    let highestFrequency = frequencyMap[arr[0]];
    for (const num in frequencyMap) {
      if (frequencyMap[num] > highestFrequency) {
        mostFrequent = Number(num);
        highestFrequency = frequencyMap[num];
      }
    }
  
    return mostFrequent;
  }
  
  // Output The Function
  const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const mostFrequentElementValue = mostFrequentElement(inputArray);
  console.log(mostFrequentElementValue);
  