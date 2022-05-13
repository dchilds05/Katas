/*
Give you one sorted array, please put them into n buckets, we need to ensure we get n sub array with approximately equal weights.
Example;
input {1, 2, 3, 4, 5} n = 3
output [[[5],[1,4],[2,3]]
*/

let arr = [10,13,1,6,4,15,7];

function separateNums(arr){
    arr.sort((a,b) => a-b);
    let res = [];
    if(arr.length % 2 != 0){
        res.push(arr.splice(arr.length-1,1));
    }
    for(let i = 0; arr.length > 0; i++){
        res.push([arr.splice(0,1), arr.splice(arr.length-1,1)]);
    }
    console.log(res);
}

separateNums(arr);