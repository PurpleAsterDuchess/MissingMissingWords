console.log("-----------Start-----------");

word = "coding";
let begins_with = [];
let ends_with = [];
let contains = [];

let checking = word.split("")

fs = require('fs');
const file = fs.readFileSync('words.txt', {encoding: 'utf8', flag:'r'});
words = file.split(" ");
for (let i=0; i < words.length; i++) {
  if (words[i].includes(word)) {
    contains.push(words[i]);
  }
  // itterate through a string
  // Array.from(words[i]).forEach(letter => {
     
  // });
}
console.log(contains);

console.log("------------End------------");
