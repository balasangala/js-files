//spread operator
//The main objective of the spread operator is to spread or expand the elements of an array or object.
//Spread operator can be used in many cases,like when we want to expand,copy,concat(merging array)
//Ex:1
// var middle = [3, 4];
// var arr = [1, 2, middle, 5, 6];
// console.log(arr);//[1, 2, [3, 4], 5, 6]

//If we want the content to be inside a single array we can make use of the spread operator.
// when we create the arr array and use the spread operator on the middle array, instead of just being inserted, the middle array expands. Each element in the middle array is inserted into the arr array.

// var middle = [1,2];
// var arr = [3,4, ...middle, 5, 6];
// console.log(arr);

// Ex2: concat()(merging)
// is used to merge two or more arrays.this method does not change the existing arrays but instead returns a new array.
// let arr = [1,2,3]; 
// let arr2 = [4,5]; 
  
// arr = arr.concat(arr2);  
// console.log(arr); // [ 1, 2, 3, 4, 5 ]
// console.log(arr2); // [4, 5 ]

// let arr = [1,2,3]; 
// let arr2 = [4,5]; 
  
// arr = [...arr, ...arr2]  
// console.log(arr); // [ 1, 2, 3, 4, 5 ]
// console.log(arr2); // [4, 5 ] 

//Note: Though we can achieve the same result, but it is not recommended to use the spread in this particular case, as for a large data set it will work slower as when compared to the native concat() method.

//Ex:3 Copying
 
// copying without the spread operator 
// let arr = ['a','b','c']; 
// let arr2 = arr; 
  
// console.log(arr2); // [ 'a', 'b', 'c' ] 
// // changed the original array   
// arr2.push('d');  
// console.log(arr2); // [ 'a', 'b', 'c', 'd'] 
// console.log(arr); // [ 'a', 'b', 'c', 'd'] even affected the original array(arr) 


//spread opertor will not change original array
// let arr = ["a", "b", "c"];
// let arr2 = [...arr];
// console.log(arr);
// arr2.push("d");
// console.log(arr);//["a", "b", "c"]
// console.log(arr2)//["a", "b", "c", "d"]

//Ex4: Math
// Math.max();
// // -Infinity
// Math.max(1, 2, 3);
// // 3
// Math.max(100, 3, 4);
// // 100

// //without spread
// let arr = [1,2,3,-1]; 
// console.log(Math.min(arr)); //NaN 
// // with spread
// let arr = [1,2,3,-1];  
// console.log(Math.min(...arr)); //-1 

// //Without the spread operator, the easiest way to use Math.max() on an array is to use .apply()
// var arr = [2, 4, 8, 6, 0];
// function max(arr) {
//   return Math.max.apply(null, arr);
// }
// console.log(max(arr));
// // 8
// //Now take a look at how we do the same exact thing with the spread operator. Instead of having to create a function and utilize the apply method to return the result of Math.max() , we only need two lines of code:
// var arr = [2, 4, 8, 6, 0];
// var max = Math.max(...arr);
// console.log(max);
// // 8


// //different ways using spread
// function sum(x, y, z) {
//   return x + y + z;
// }
// const numbers = [1, 2, 3];
// console.log(sum(...numbers));// dont need null here
// // expected output: 6
// console.log(sum.apply(null, numbers));
// expected output: 6

//Ex5: Use the spread operator to simply convert a string to an array of characters
// const arr = 'hello';
// const arr2 = [...arr];
// console.log(arr);//hello
// console.log(arr2);// ["h", "e", "l", "l", "o"]

//cool stuff

// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];

// alert( Math.max(...arr1, ...arr2) ); // 8

// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];

// alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

//spread operator in object literals

// var obj1 = { a: 1, b: 2 };
// var obj2 = {  b: 4, c: 5  };

// var clonedObj = { ...obj1 };
// console.log(clonedObj);
//{a: 1, b: 2}

// var mergedObj = { ...obj1, ...obj2 };
// console.log(mergedObj);
//{a: 1, b: 4, c: 5}

// //This works something like Object.assign, and does what you'd expect: it will overridden if objects has same key on  what comes first is 'overridden' by what comes later basis

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget);
// // expected output: Object { a: 1, b: 4, c: 5 }

//rest parameter
//rest parameter is an improved way to handle function parameter, allowing us to more easily handle various input as parameters in a function. The rest parameter syntax allows us to represent an indefinite number of arguments as an array. With the help of a rest parameter a function can be called with any number of arguments, no matter how it was defined. Rest parameter is added in ES2015 or ES6 which improved the ability to handle parameter.

//A function can be called with any number of arguments, no matter how it is defined.

//without rest
// function add(x, y) {
//   return x + y;
// }
// add(1, 2, 3, 4, 5) // returns 3

// with rest
// function add(...args) {
//   let result = 0;

//   for (let arg of args) result += arg;

//   return result
// }

// add(1) // returns 1
// add(1,2) // returns 3
// add(1, 2, 3, 4, 5) // returns 15

// Note: Rest parameters have to be at the last argument. This is because it collects all remaining/ excess arguments into an array. So having a function definition like this does not make sense and it errors out. :
