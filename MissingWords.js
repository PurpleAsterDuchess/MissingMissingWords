console.log("-----------Start-----------");

const word = "coding";
const begins_with = [];
const ends_with = [];
const contains = [];

let checking = word.split("")

fs = require('fs');
const file = fs.readFileSync('words.txt', {encoding: 'utf8', flag:'r'});
words = file.split(" ");
for (let i=0; i < words.length; i++) {
  if (words[i].includes(word)) {
    contains.push(words[i]);
  }
  // itterate through a string
  // Array.from(contains[i]).forEach(letter => {
  //  });
}
for (let i=0; i < contains.length; i++) {
  if (contains[i].endsWith(word)) {
    ends_with.push(contains[i]);
  } else if(contains[i].startsWith(word)) {
    begins_with.push(contains[i]);
  }
}

console.log(`BEGINS_WITH ${begins_with}`);
console.log(`ENDS_WITH ${ends_with}`);
console.log(`CONTAINS ${contains}`);


console.log("------------End------------");
