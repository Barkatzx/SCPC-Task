function romanToInteger(romanNumeral) {
    const romanMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let result = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentVal = romanMap[romanNumeral[i]];
      const nextVal = romanMap[romanNumeral[i + 1]];
  
      if (nextVal > currentVal) {
        result += (nextVal - currentVal);
        i++; 
      } else {
        result += currentVal;
      }
    }
  
    return result;
  }
  
  const romanNumeral1 = "IX";
  const romanNumeral2 = "XXI";
  
  console.log(romanToInteger(romanNumeral1));
  console.log(romanToInteger(romanNumeral2));
  