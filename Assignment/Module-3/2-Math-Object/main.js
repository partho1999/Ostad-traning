function rootSquareSum(numbers){
    let square = numbers.reduce((acc, curVal) => {
      return acc + curVal ** 2;
    }, 0);


    return Math.sqrt(square);
}


console.log(rootSquareSum([2,3,4,5,6]));


function sum_sq(array) {
    var sum = 0,
        i = array.length;
    while (i--) {
      sum += Math.pow(array[i], 2);
    }return Math.sqrt(sum);
}
  
  console.log(sum_sq([2,3,4,5,6]));
  