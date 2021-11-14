/*
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.
*/


/*
EXAMPLE THAT HELPED ME SOLVE THIS:
n = 1000

1000/5^1 = 200
1000/5^2 = 40
1000/5^3 = 8
1000/5^4 = 1.6

NumZeros = 449
*/

function zeros (n) {
    if(n === 0) return 0;
    let numZeros = 0;
    let res = 3;
    for(let i = 1; res > 1; i++){
      res = Math.floor(n/Math.pow(5,i));
      numZeros += res;
    }
    return numZeros;
}