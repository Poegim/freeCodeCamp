function steamrollArray(arr, flatArr=[]) {

    arr.map((item) => {
        if(item instanceof Array)
        {
            steamrollArray(item, flatArr);
        } else {
            flatArr.push(item);
        }
        
    });
   
    
    return flatArr;
}


console.log(steamrollArray([[["a"]], [["b"]]]));
//  should return ["a", "b"].

// steamrollArray([1, [2], [3, [[4]]]]);
// should return [1, 2, 3, 4].

// steamrollArray([1, [], [3, [[4]]]]);
// should return [1, 3, 4].

// steamrollArray([1, {}, [3, [[4]]]]);
// should return [1, {}, 3, 4].

// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.