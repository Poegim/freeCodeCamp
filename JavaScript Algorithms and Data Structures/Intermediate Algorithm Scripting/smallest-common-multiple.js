function smallestCommons(arr) {
    
    const [min, max] = arr.sort((a, b) => a - b);  

    let upperBound = 1;

    for (let i = min; i <= max; i++) {
        upperBound *=  i;
    }

    for(let multiple = max; multiple <= upperBound; multiple += max)
    {
        console.log(multiple);
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