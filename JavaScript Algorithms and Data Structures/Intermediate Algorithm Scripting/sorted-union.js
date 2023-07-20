function uniteUnique(...arr) {
    const mergedArray = [];

    arr.forEach(element => {
        element.forEach(el => {
            if (!mergedArray.includes(el)) {
                mergedArray.push(el);
            }
        })
    });

    return mergedArray;

}

// should return [1, 3, 2, 5, 4].
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
//  should return [1, 2, 3, 5].
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
//  should return [1, 2, 3, 5, 4, 6, 7, 8].
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
//  should return [1, 3, 2, 5, 4, 6].
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));
//  should return [1, 3, 2, 5, 4].
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));