//Write a program that prints numbers from 1 to 100.
// But for multiples of three print ‘FIZZ’ instead of the number and 
// for the multiples of five print ‘BUZZ’ and finally for
// the multiples of three and five print ‘FIZZBUZZ’.


// loop (1-100)
for(let i = 1; i <= 100; i++){
    if(i%15 === 0){
        console.log("FIZZBUZZ");
    } else if(i%3 === 0){
        console.log("FIZZ");
    } else  if(i % 5 === 0) {
        console.log("BUZZ");
    }else {
        console.log(i);
    }
}