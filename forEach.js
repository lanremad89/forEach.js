/*
The .forEach() Method
The first iteration method that we’re going to learn is .forEach(). Aptly named, .forEach() will execute the same code for each element of an array.
 */
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function(fruit){
  console.log(`I want to eat a ${fruit}`);
})