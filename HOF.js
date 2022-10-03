// MAP

// const fn = ['FCF', 'HOF', 'IIFE'];

// const showfns = fn.map( function (fn) {
//   return "Here's a function " + fn;
// });
// console.log(showfns);

// Filter 

const fns = ['FCF', 'HOF', 'IIFE'];

const fourletters= fns.filter( function (fn) {
  return fn.length === 4;
});

console.log(fourletters);

