function pairElement(str) {

    const pairs = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C",
    };

    let output = [];

    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        output[i] = [element, pairs[element]];
    }

    return output;
}



// should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
console.log(pairElement("ATCGA"));

// should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
console.log(pairElement("TTGAG"));

// should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
console.log(pairElement("CTCTA"));