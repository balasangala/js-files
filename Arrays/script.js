// var arr = ["apple", "banana", "mango"];
// //Array elements are numbered, starting with zero.
// //We can get an element by its number in square brackets:
// console.log(arr[0]);
// console.log(arr[1]);

// arr[0] = "graypes";

// arr[3] = "new fruit";

// console.log(arr);

// console.log(arr.length);

// let arr = ["Apple", {name: "bala"}, true, function(){alert("hi")}];
// console.log(arr[0]);
// console.log(arr[1].name);
// console.log(arr[2])
// console.log(arr[3]());

// var arr = ["apple", "banana", "mango"];

//onsole.log(arr.push("melon", "manga2"));//5(it returns length)

 //console.log(arr);
//alert(arr.pop());//mango
//alert(arr);

// console.log(arr.shift());//apple
// console.log(arr);
// console.log(arr.unshift("xxx", "yyyy"));//5(it returns length);
// console.log(arr);
// alert(typeof arr);//object


// var arr = [1,2, 3, 4, 5];
// arr[24] = "apple";
// console.log(arr);
// console.log(arr.length);
//  arr.length = 2;
//  console.log(arr);
//  arr.length = 5;
//  console.log(arr[3]);

// let marr = [
//     [1,2,4],
//     [5,6,7],
//     [8,9,0]
// ]

// console.log(marr[2][1]);

// console.log(marr[1][2]);

//Imagine we have an array of objects. How do we find an object with the specific condition?
//let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
///});

//item is the element.
//index is its index.
//array is the array itself.
//If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.

//find
//The find() method returns the value of the first array element that passes a test function.
//filter
//The filter() method creates a new array with array elements that passes a test.

//  let arr = [1, 2, 3, 4];

// const result = arr.find(function(item){
//     if(item>2){
//         return true;
//     }
// });
// console.log(result);//3

//using es6
// const result = arr.find(item => item > 2);
// console.log(result);//3

// let users = [
//     {id: 1, name: "bala"},
//     {id: 2, name: "rithwik"},
//     {id: 3, name: "pushpa"},
//     {id: 4, name: "not yet"}

// ]

// const userOut = users.find(function(item){
//     if(item.id > 2){
//         return true;
//     }
// });
// console.log(userOut);//{id: 3, name: "pushpa"}
// console.log(userOut.name)//pushpa

//es6
// const userOut = users.find(item => item.id > 2);
// console.log(userOut);//{id: 3, name: "pushpa"}
// console.log(userOut.name);//pushpa

// let arr = [1, 4, 15, 5, 12, 7];

// const result = arr.filter(function(item){
//     if(item > 5){
//         return true;
//     }
// });
// console.log(result);//15,12,7

//es6

// const result = arr.filter(item => item > 5);
// console.log(result);//15, 12, 7

// let users = [
//     {id: 1, name: "bala"},
//     {id: 2, name: "sangala"},
//     {id: 4, name: "pushpa"},
//     {id: 5, name: "rithwik"}
// ]

// const result = users.filter(function(item){
//     if(item.id > 2){
//         return true;
//     }
// });
// console.log(result);//result wil be array of objects
// //0: {id: 4, name: "pushpa"}
// //1: {id: 5, name: "rithwik"}
// console.log(result[0].id);//4
// console.log(result[1].name)//rithwik

//es6
 //const result = users.filter(item => item.id > 2);

 // console.log(result);//result wil be array of objects
// //0: {id: 4, name: "pushpa"}
// //1: {id: 5, name: "rithwik"}
// console.log(result[0].id);//4
// console.log(result[1].name)//rithwik
//note: to print all resulted objects, loop result varible

//map()
//The map() method creates a new array by performing a function on each array element.
//The map() method does not execute the function for array elements without values.
//The map() method does not change the original array.
//The arr.map method is one of the most useful and often used.
//It calls the function for each element of the array and returns the array of results.
//Transform an array
//sytax 
//let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
//});

//ex1
let arr = [2,4,8,10];
const result = arr.map(item => item*item);
console.log(result);//4, 16, 64, 100
console.log(arr);//2,4,8,10

//ex2:

let nums = [1, 4, 9];
// const roots = nums.map(function(num){
//     return Math.sqrt(num);
// });
// console.log(roots);//[1,2,3]
// console.log(nums);//[1,4,9]

//es6
const roots = nums.map(num => Math.sqrt(num));
console.log(roots);//[1,2,3]
console.log(nums);//[1,4,9]

//map in objects

//EX3

let usersList = [
    {fName: "bala", lName: "sangala"},
    {fName: "pushpa", lName: "sangala"}

]

const resultArr = usersList.map(item => item.fName +" "+item.lName);
console.log(resultArr);//["bala sangala", "pushpa sangala"]

//ex4

var kvArray = [{key: 1, value: 10}, 
    {key: 2, value: 20}, 
    {key: 3, value: 30}];

var reformattedArray = kvArray.map(obj =>{ 
var rObj = {};
rObj[obj.key] = obj.value;
return rObj;
});
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}], 

// kvArray is still: 
// [{key: 1, value: 10}, 
//  {key: 2, value: 20}, 
//  {key: 3, value: 30}]


//ex5
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

// alert( usersMapped[0].id ); // 1
// alert( usersMapped[0].fullName ); // John Smith

//ex6
//print unique array elem
function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(strings) ); // Hare, Krishna, :-O

