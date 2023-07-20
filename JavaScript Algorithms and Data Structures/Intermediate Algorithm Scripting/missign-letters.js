function fearNotLetter(str) {
    
    const lettersInRange = getRangeOfLetters(str);
    for(let i = 0; i < lettersInRange.length; i++)
    {
        if(str.indexOf(lettersInRange[i]) == -1)
        {
            return lettersInRange[i];
        }
    }

}

function getRangeOfLetters(str)
{
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const firstLetter = str[0];
    const lastLetter = str[str.length - 1];

    const start = alphabet.indexOf(firstLetter);
    const stop = alphabet.indexOf(lastLetter);

    return alphabet.slice(start, stop+1);

}

//  should return the string d.
console.log(fearNotLetter("abce"));
//  should return the string i.
console.log(fearNotLetter("abcdefghjklmno"));
//  should return the string u.
console.log(fearNotLetter("stvwx"));
//  should return the string e.
console.log(fearNotLetter("bcdf"));
//  should return undefined.
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));