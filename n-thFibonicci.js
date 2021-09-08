/*
I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
*/
/*
function nthFibo(n) {
    let arr = [0,1];
    if (n===1) return 0;
    else if (n===2) return 1;
    else {
      for (let i=2; i<=n; i++){
      arr[i]=arr[i-1]+arr[i-2];
      }
      return arr[n-1];
    }
  }
*/

//RECURSIVE FUNCTION
function nthFibo(n) {
    if (n===1) return 0;
    else if (n===2) return 1;
    else return (nthFibo(n-1) + nthFibo(n-2));
  }