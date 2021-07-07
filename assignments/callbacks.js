// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/

// getLength passes the length of the array into the callback.

function getLength(arr, cb) {
    return cb(arr.length);
}

getLength(items, function(length) {
  return console.log(length);
});

  // last passes the last item of the array into the callback.

  function last(arr, cb) {
    return cb(arr[arr.length - 1])
  };

  last(items, function(endItem){
    return console.log(endItem);
  });

   // sumNums adds two numbers (x, y) and passes the result to the callback.

   function sumNums(num1, num2 ,cb) {
     return cb(num1 + num2);
   }

   sumNums(3, 10, function(summer){
    return console.log(summer);
   });

     // multiplyNums multiplies two numbers and passes the result to the callback.

     function mutliplyNums(x, y, cb){
       return cb(x * y);
     }

     mutliplyNums(10,11, function(multi){
        return console.log(multi)
     });

      // contains checks if an item is present inside of the given array/list.
     // Pass true to the callback if it is, otherwise pass false.

     function contains(arr, searchitem, cb){
      if (arr.includes(searchitem)) {
         return cb(true);
        }
    else {
          return cb(false);
        }
     }

     contains(items, 'Gum', function(search){
        return console.log(search)
     });



     /* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
 
};