
var commonCharacters = [];
var frequency = [];
var a = "a".codePointAt(0);

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {

    initializeCommonCharacters(words[0]);
    setFrequencyToZero();
    let n_array = words.length;

    for (let i = 1; i < n_array; i++) {
        let n_word = words[i].length;
        for (let j = 0; j < n_word; j++) {
            frequency[words[i].codePointAt(j) - a]++;
        }
        updateCommonCharacters();
        setFrequencyToZero();
    }
    return turnCommonCharactersIntoCharArray();
};

function updateCommonCharacters() {
    for (let i = 0; i < 26; i++) {
        commonCharacters[i] = Math.min(commonCharacters[i], frequency[i]);
    }
}

function setFrequencyToZero() {
    for (let i = 0; i < 26; i++) {
        frequency[i] = 0;
    }
}

function initializeCommonCharacters(firstWord) {
    for (let i = 0; i < 26; i++) {
        commonCharacters[i] = 0;
    }

    for (let i = 0; i < firstWord.length; i++) {
        commonCharacters[firstWord.codePointAt(i) - a]++;
    }
}

function turnCommonCharactersIntoCharArray() {
    let result = [];
    let index = 0;
    for (let i = 0; i < 26; i++) {
        while (commonCharacters[i]-- > 0) {
            result[index++] = String.fromCodePoint(i + a);
        }
    }
    return result;
}
