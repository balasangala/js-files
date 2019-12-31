//localStorage and sessionStorage allow to save data in key/value pairs in the browser.
//Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.
//Web storage is per origin (per domain and protocol). All pages, from one origin, can store and access the same data.
//Differene is that session strorage stores the data for only one session. The data is deleted when the user closes the specific browser tab but The localStorage object stores the data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

//Both storage objects provide same methods and properties:
/*setItem(key, value) – store key/value pair.
getItem(key) – get the value by key.
removeItem(key) – remove the key with its value.
clear() – delete everything.
key(index) – get the key on a given position.
length – the number of stored items.*/

//EX:1 
// localStorage.setItem("name", "hello");
// localStorage.getItem("name");
// localStorage.removeItem("name");
// localStorage.clear();

//ex2
// var fName = "bala";
// localStorage.setItem("namef", fName);
// console.log(localStorage.getItem("namef"));
//console.log(localStorage.removeItem("namef"));

//ex3
// var siteData = {
//     fName: "bala",
//     lName: "sangala",
//     age: 27
// }

// localStorage.setItem("mydata", JSON.stringify(siteData));
// var localdata = JSON.parse(localStorage.getItem("mydata"));
// console.log(localdata);
// console.log(localdata.fName);
// console.log(localdata.lName);

// for(var i=0; i<localStorage.length; i++){
//     console.log(localStorage.key(i));
// }

// for(let i=0; i<localStorage.length; i++) {
//     let key = localStorage.key(i);
//     alert(`${key}: ${localStorage.getItem(key)}`);
//   }

// let keys = Object.keys(localStorage);
// for(let key of keys) {
//   alert(`${key}: ${localStorage.getItem(key)}`);
// }

// Real world example

var inp1 = document.getElementById('inputKey');
var inp2 = document.getElementById('inputValue');
var out = document.getElementById('output');

var btnclc = document.getElementById('button').addEventListener("click", displayData);

function displayData(){
    const key1 = inp1.value;
    const value1 = inp2.value;
    if(key1&&value1){
        localStorage.setItem(key1, value1);

        for(var i = 0; i < localStorage.length; i++){

            var keyvalue = localStorage.key(i);
            var valueval = localStorage.getItem(keyvalue);
            out.innerHTML += `${keyvalue} ${valueval}`
        }
    }
}


