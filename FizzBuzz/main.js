let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

 // for (let i = 1; i <= answer; i++) { //
  //  console.log(i); //
// } //

// This is a for loop. We declare a variable (i) and assign it 1: the initial value of the variable (i) in our loop. The second clause, i <= answer is our condition. We want to loop until i is greater than answer. The third clause, i++, tells our loop to increment i by 1 every iteration. As a result, if the user inputs 10, this loop would print numbers 1 - 10 to the console. //

// for (let i = 1; i <= answer; i++) {
  //  if (i % 3 === 0 && i % 5 === 0) {
    //    console.log("FizzBuzz")
    // }
   // else if (i % 3 === 0) {
  //  console.log("Fizz");
// }   else if (i % 5 === 0){
  //  console.log("Buzz")
   // } else {
    //    console.log(i)
   // }
// }




for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}
