
function reverseString(inputString) {

    var wordSplit = []; 
    var reversedWordArray = [];
    
    wordSplit = inputString.split(" ");
    
    wordSplit.forEach( (word) => {
        reversedWordArray.push(reverseWord(word));
    } );

    let reversedString = reversedWordArray.join(" ");
    console.log(reversedString);
    return reverseString;
    
 }

 function reverseWord(word) {
    charSplit = word.split("");
    charReversed = charSplit.reverse().join("");
    return charReversed;
 }

 reverseString("boom yeaha babies");