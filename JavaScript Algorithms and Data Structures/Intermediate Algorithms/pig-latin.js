function translatePigLatin(str) {

    let newStr;

    if (isVowel(str.charAt(0))) {
        return str + "way";
    }

    
    console.log(isConsonantOrClusterOf(str, 0));
    // return str;
}

function isVowel(c) {
    const vovels = ['a', 'e', 'i', 'o', 'u'];
    return vovels.includes(c.toLowerCase());
}

//Return number of Consonant in a row;
function isConsonantOrClusterOf(str, n) {

    if (n >= str.length) {
        return -1; // Wskazanie, że w pozostałym ciągu nie znaleziono spółgłoski.
    }

    let char = str.charAt(n);

    if (!isVowel(char)) {
        const nextIndex = isConsonantOrClusterOf(str, n + 1);

        if (nextIndex === -1) {
            return n; // Jeśli poza bieżącym indeksem nie ma już spółgłosek, zwracamy bieżący indeks.
        } else {
            return nextIndex; // W przeciwnym razie zwracamy indeks znaleziony za bieżącym indeksem.
        }
    } else {
        return isConsonantOrClusterOf(str, n + 1); // Rekurencyjne wywołanie dla znalezienia kolejnej spółgłoski.
    }

}

//should return the string aliforniacay.
console.log(translatePigLatin("ccca"));

//should return the string aragraphspay.
// translatePigLatin("paragraphs");

//should return the string oveglay.
// translatePigLatin("glove");

//should return the string algorithmway.
// translatePigLatin("algorithm");

//should return the string eightway.
// translatePigLatin("eight");

//Should handle words where the first vowel comes in the middle of the word. Should return the string artzschway.
// translatePigLatin("schwartz");

//Should handle words without vowels. Should return the string rhythmay
// translatePigLatin("rhythm");