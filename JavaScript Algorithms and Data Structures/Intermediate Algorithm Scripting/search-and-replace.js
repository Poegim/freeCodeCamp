function myReplace(str, before, after) {

    let words = str.split(" ");

    let indexOfWord = words.indexOf(before);
    
    if(words[indexOfWord][0] == words[indexOfWord][0].toUpperCase())
    {
        after = after.charAt(0).toUpperCase() + after.slice(1);
        words[indexOfWord] = after;
        
    }

    if(words[indexOfWord][0] == words[indexOfWord][0].toLowerCase())
    {
        after = after.charAt(0).toLowerCase() + after.slice(1);
        words[indexOfWord] = after;
    }

    return words.join(" ");
}

// should return the string Let us go to the mall.
console.log(myReplace("Let us go to the store", "store", "mall"));

// should return the string He is Sitting on the couch.
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

// should return the string I think we should look down there.
console.log(myReplace("I think we should look up there", "up", "Down"));

// should return the string This has a spelling error.
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));

// should return the string His name is John.
console.log(myReplace("His name is Tom", "Tom", "john"));

// should return the string Let us get back to more Algorithms.
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));