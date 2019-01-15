// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

function LongestWord(sen) {
    var longestWord = '';
    sen.split(' ').forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        };
    });
    return longestWord;
}

console.log(LongestWord("No Nop Tampoco EstaSiEsLaPalabra EstaNop"));
