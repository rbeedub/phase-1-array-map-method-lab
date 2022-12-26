const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }


// const titleCased(string) {
//   return string.split(" ").map(funtion(word) {
//   return word.chartAt(0).toUpperCase() + word.slice(1).toLowerCase() 
//  })
//     return newArray.join(' ');
// }

function titleCased(str) {
  const wordArr = str.split(" , ");
  const newArr = wordArr.map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return newArr.join(' ');
}
