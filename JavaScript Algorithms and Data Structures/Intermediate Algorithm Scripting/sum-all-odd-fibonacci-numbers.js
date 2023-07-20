function sumFibs(num) {

    let A = 0;
    let B = 1;
    let fib = 0;
    let count = 0;

    while (fib <= num) {

        if (fib % 2 != 0) {
            count += fib;
        }

        fib = A + B;
        B = A;
        A = fib;

    }

    return count;
}


console.log(sumFibs(1));
// should return a number.
console.log(sumFibs(1000));
// should return 1785.
console.log(sumFibs(4000000));
// // should return 4613732.
console.log(sumFibs(4));
// // should return 5.
console.log(sumFibs(75024));
// // should return 60696.
console.log(sumFibs(75025));
// should return 135721.