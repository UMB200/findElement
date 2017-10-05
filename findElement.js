// Finders Keepers

// Create a function that looks through an array (first argument) 
// and returns the first element in the array that passes a truth test 
// (second argument).

function findElement(arr, func) {
  //assigning to given parameter 'num' value of filtered function  
  var num = arr.filter(func);
  //truth test: so if array has true values then return the 1st element of that array
   if(num.length !==0){
     return num[0];
}
  //if there are no true values then return undefined
  return undefined;
}
findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });