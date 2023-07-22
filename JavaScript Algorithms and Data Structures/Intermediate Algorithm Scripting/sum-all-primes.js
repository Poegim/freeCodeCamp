function sumPrimes(num) {

    let sum = 0;

    for (let i = 0; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}

function isPrime(n) {
    if (n == 0) {
        return false;
    }

    if (n == 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;

}

// should return 17.
console.log(sumPrimes(10));

// should return 73156.
console.log(sumPrimes(977));