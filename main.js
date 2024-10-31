function sumEvenNumbers(numbers) {
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        sum += numbers[i];
      }
    }
    
    return sum;
  }

  //TESTING FUNCTION
  console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Expected : 12
console.log(sumEvenNumbers([1, 3, 5, 7, 9])); // Expected : 0
console.log(sumEvenNumbers([2, 4, 6, 8, 10])); // Expected : 30
console.log(sumEvenNumbers([-2, 0, 2, 4, -6])); // Expected : -2