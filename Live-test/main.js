
// defining vowels
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    return count
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(`there are ${result} vowel in this string`);
console.log('the number of vowels:', result);
alert('the number of vowels:'+result);