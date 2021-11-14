/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
*/

function rowSumOddNumbers(n) {
    var fullArr=[];
    var sum = 0;
    for(i=1;i<=n;i++){
      let newArr = [];
      let iStart = i*(i-1)
      let iEnd = i*(i+1)
      for(x=iStart;x<iEnd;x++){
        if(x % 2 !== 0) newArr.push(x)
      }
      fullArr.push(newArr);
    }
    fullArr[n-1].map((num) => {
      sum+=num;
    })
    return sum;
  }