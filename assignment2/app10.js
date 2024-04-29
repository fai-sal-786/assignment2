// Q1:Write a loop to print numbers from 1 to 10.?

// for(let i = 1; i <=10; i++){
    // console.log(i);
// }

// Q2:Write a loop to print even numbers from 1 to 20.?

// for(let i = 2; i <=20; i+= 2){
    // console.log(i);
// }

// Q3:Write a loop to print odd numbers from 1 to 15.?

// for(let i = 1; i <= 15; i+= 2){
    // console.log(i);
// }

// Q4: Write a loop to calculate and print the factorial of a number (let's say 5).?

// let number = 5;
// let factorial = 1;

// for(let i = 1; i <= number; i++){
    // factorial *= i;
// }
// console.log("The factorial of", number, "is:", factorial);

// Q5:Write a loop to print the multiplication table of a number (let's say 7) up to 10.?

// const number = 7;

// console.log(`Multiplication table of ${number}:`);
// for(let i = 1; i <= 10; i++){
    // console.log(`${number} * ${i} = ${number * i}`);
// }
// 
// Q6:Write a loop to print the Fibonacci series up to the 10th term.?


// let fibonacci_series = [0, 1];
// for(let i = 0; i < 10; i++ ){
    // let next_term = fibonacci_series[i - 1] + fibonacci_series[i - 2];
    // fibonacci_series.push(next_term);
// }
// console.log("Fibonacci_series up to the 10th term:");
// fibonacci_series.forEach(term=> console.log(term));

// Q7:Write a loop to find and print the sum of digits of a number (let's say 123)?

// const number = 123;
// let sumOfDigits = 0;

// for( let digits of number.toString()) {
    // sumOfDigits += parseInt(digits);
// }

// console.log("The sum of digits", number, "is:", sumOfDigits);

// Q8:Write a loop to  print the reverse of a string (let's say hello)?

// let string = 'hello';
// let reverseString = '';
// 
// for(let i = string.length - 1; i >= 0; i--){
    // reverseString += string[i];
// }

// console.log(reverseString);

// Q9:Write a loop to print the square of numbers from 1 to 10.?

// for (let i = 1; i<= 10; i++){
    // console.log(i * 1);
// }

// Q10:Write a loop to find and print the largest element in an array (let's say [3, 7, 2, 9, 5]).?

// let arr = [3, 7, 2, 9, 5];
// let maxElements = arr[0];

// for(let i = 1; i < arr.length; i++) {
    // if(arr[i] > maxElements){
        // maxElements = arr[i];
    // }
// }
// console.log(maxElements);
