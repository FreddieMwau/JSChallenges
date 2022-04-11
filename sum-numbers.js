
// Write a program that takes a set of numbers and return the sum of all the numbers passed

const sum_numbers = (numbers) => {
    // console.log(numbers)
    let sum = 0;

    // loop through the array
    for (let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
}


console.log(sum_numbers([6, 8, 3]));
