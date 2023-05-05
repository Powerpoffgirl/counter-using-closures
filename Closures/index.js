/*
Module package, function currying, memoize, 
higer order function, data hiding & encapsulation

Other functions or other part of function can't access it.

*/

// Example of data hiding
const result = document.getElementById("count");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");

class Counter {
  constructor() {
    var count = 0;
    this.incrementCounter = function () {
      count++;
      result.innerText = count;
      console.log(count);
    };
    this.decrementCounter = function () {
      count--;
      result.innerText = count;
      console.log(count);
    };
  }
}

var counter = new Counter();

increment.addEventListener("click", counter.incrementCounter);
decrement.addEventListener("click", counter.decrementCounter);
// console.log(count);

// var counter1 = counter();
// counter1();
// console.log(count);

// function outest() {
//   var c = 20;
//   function outer(b) {
//     let a;
//     function inner() {
//       console.log(a, b, c);
//     }
//     return inner;
//   }

//   return outer;
// }
// let a = 100;
// console.log(a);
// var close = outest()("hello world");
// close();

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     return y;//When this function is returned,
// }
// var z = x();
// console.log(z);

// z();

//A function along with its lexical scope forms a closure.
