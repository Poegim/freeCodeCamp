function smallestCommons(arr) {
    
    arrInOrder = returnBiggerInOrder(arr);


}

function returnBiggerInOrder(arr)
{
    const newArr = []
    if(arr[0] < arr[1]) {
        newArr[0] = arr[1];
        newArr[1] = arr[0];
        return newArr
    } else {
        return arr;
    }
}
  

// should return 60.
console.log(smallestCommons([5, 1]));
// should return 60.
// console.log(smallestCommons([5, 1]));
// should return 2520.
// console.log(smallestCommons([2, 10]));
// should return 360360.
// console.log(smallestCommons([1, 13]));
// should return 6056820.
// console.log(smallestCommons([23, 18]));