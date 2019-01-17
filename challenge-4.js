// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

function LetterChanges(str) {
    var letters = str.split('');
    var newStr = [];
    letters.forEach(letter => {
        var charCode = letter.charCodeAt(0);
        if (/^[a-zA-Z]+$/.test(letter)) {
            if (charCode === 122) {
                charCode = 97;
            }
            else if(charCode === 90) {
                charCode =  65;
            }
            else {
                charCode=charCode+1;
            }
        }

        var newLetter = String.fromCharCode(charCode);
        if (/^[aeiou]+$/.test(newLetter)) {
            newLetter = newLetter.toUpperCase();
        }
        newStr.push(newLetter);
    });
    return newStr.join('');
}

console.log(LetterChanges('abcz hola ABC ZHOLA'));
