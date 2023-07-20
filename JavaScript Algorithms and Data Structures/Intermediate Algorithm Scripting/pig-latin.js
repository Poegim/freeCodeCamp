function translatePigLatin(str) {

    if (isVowel(str.charAt(0))) {
        return str + "way";
    }

    const cluster = isConsonantOrClusterOf(str);
    if (cluster != str.length) {
        return str.slice(cluster) + str.slice(0, cluster) + "ay";
    } else {
        return str + "ay";
    }

}

function isVowel(c) {
    const vovels = ['a', 'e', 'i', 'o', 'u'];
    return vovels.includes(c.toLowerCase());
}

//Returns number of Consonant in a row;
function isConsonantOrClusterOf(str) {

    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (isVowel(char)) {
            return i;
        }
    }

    return str.length;

}

//should return the string aliforniacay.
console.log(translatePigLatin("california"));

// should return the string aragraphspay.
console.log(translatePigLatin("paragraphs"));

//should return the string oveglay.
console.log(translatePigLatin("glove"));

//should return the string algorithmway.
console.log(translatePigLatin("algorithm"));

//should return the string eightway.
console.log(translatePigLatin("eight"));

//Should handle words where the first vowel comes in the middle of the word. Should return the string artzschway.
console.log(translatePigLatin("schwartz"));

//Should handle words without vowels. Should return the string rhythmay
console.log(translatePigLatin("rhythm"));