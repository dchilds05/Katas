//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

var moveZeros = function (arr) {
    let newArr = [];
    let zeroArr = [];
    for(let i=0; i<arr.length; i++){
      if(arr[i]===0) zeroArr.push(arr[i])
      else newArr.push(arr[i]);
    }
    return newArr.concat(zeroArr);
  }

  /*
  Top-rated solution:
  
  var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
  }
  */