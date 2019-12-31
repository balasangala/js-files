// Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
// Benefits of Promises
    // Improves Code Readability
    // Better handling of asynchronous operations
    // Better flow of control definition in asynchronous logic
    // Better Error Handling
//syntax

var promise = new Promise(function(resolve, reject){

});

//promise callback function or exeutor takes two arguments, resolve and reject
// resolve(value) — if the job finished successfully, with result value.
// reject(error) — if an error occurred, error is the error object.

//Promises can be consumed by registering functions using .then()
//then() is invoked when a promise is either resolved or rejected.
//syntxt
/*.then(function(result){
    //handle success
}, function(error){
    //handle error
}) */

//we use catch() method for error handling
//catch() is invoked when a promise is either rejected or some error has occured in execution.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.

//EX:1

var promise = new Promise(function(resolve, reject){
    var x = true;
    if(x){
        resolve("its ture, return with value");
    } else {
        reject("its false so error");
    }
});
promise.then(function(result){
    console.log(result);
}, function(error){
    console.log(error);
});
//output: its ture, return with value

//ex2 using catch method

var promise2 = new Promise(function(resolve, reject){
    var x = false;
    if(x){
        resolve("done");
    } else {
        reject("error");
    }
});

promise2.then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
});
//output: erro

//es6 example
var promise3 = new Promise(function(resolve, reject){
    setTimeout( ()=> resolve("done"), 1000);
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});
promise3.then(
    result => console.log(result),
    error => console.log(error)
);
//output: done

//ex3: If we’re interested only in successful completions, then we can provide only one function argument to .then:
let promise4 = new Promise(resolve => {
    setTimeout(() => resolve("done!"), 1000);
  });
  promise.then(alert); // shows "done!" after 1 second

//ex4: there is finally in promise
// A finally handler has no arguments. In finally we don’t know whether the promise is successful or not. That’s all right, as our task is usually to perform “general” finalizing procedures.
// A finally handler passes through results and errors to the next handler.
//runs when the promise is settled, doesn't matter successfully or not
// For instance, here the result is passed through finally to then:
let promise5 = new Promise(function(resolve, reject){
    setTimeout( () => resolve("done"), 1000);
});

promise5.finally( () => alert("promise is ready"))
.then( result => alert(result));
//done

//promise chaining
//ex:5
var promise6 = new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)
  
  }).then(function(result) { // (**)
  
    alert(result); // 1
    return result * 2;
  
  }).then(function(result) { // (***)
  
    alert(result); // 2
    return result * 2;
  
  }).then(function(result) {
  
    alert(result); // 4
    return result * 2;
  
  });

  //callback hell
  //EX1: real world example
  function loadScript(src, callback){
    let script = document.createElement('script');
    script.src = src;
    //onload is most often used within the <body> element to execute a script once a web page has completely loaded all content (including images, script files, CSS files, etc.).
    script.onload = function(){
        callback(script); 
    }
    //function is the handler function to be called when the window’s load event fires.
    document.head.append(script);
    
}
loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', function(script){
    alert(`cool, script ${script.src} is loaded`);
    alert( _ );
})

//es6
// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(script);
//     document.head.append(script);
//   }
  
//   loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
//     alert(`Cool, the script ${script.src} is loaded`);
//     alert( _ ); // function declared in the loaded script
//   });

//How can we load two scripts sequentially: the first one, and then the second one after it?
//The natural solution would be to put the second loadScript call inside the callback, like this:
// loadScript('/my/script.js', function(script) {

//     alert(`Cool, the ${script.src} is loaded, let's load one more`);
  
//     loadScript('/my/script2.js', function(script) {
//       alert(`Cool, the second script is loaded`);
//     });
  
//   });

  //After the outer loadScript is complete, the callback initiates the inner one.
//What if we want one more script…?
//this is called callback hell bcas of this hell we will use promises
//   loadScript('/my/script.js', function(script) {

//     loadScript('/my/script2.js', function(script) {
  
//       loadScript('/my/script3.js', function(script) {
//         // ...continue after all scripts are loaded
//       });
  
//     })
  
//   });

//using promises
var promise7 = new Promise(function(resolve, reject){
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js';
    script.onload = function(){
        resolve(script);
    }
    document.head.append(script);

})

promise7.then(function(script){
    alert('script is loade' + script.src);
})


// function loadScript(src) {
//     return new Promise(function(resolve, reject) {
//       let script = document.createElement('script');
//       script.src = src;
  
//       script.onload = () => resolve(script);
//       script.onerror = () => reject(new Error(`Script load error for ${src}`));
  
//       document.head.append(script);
//     });
//   }
//   let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

// promise.then(
//   script => alert(`${script.src} is loaded!`),
//   error => alert(`Error: ${error.message}`)
// );

// promise.then(script => alert('Another handler...'));

//loading more scripts
loadScript("/article/promise-chaining/one.js")
  .then(function(script) {
    return loadScript("/article/promise-chaining/two.js");
  })
  .then(function(script) {
    return loadScript("/article/promise-chaining/three.js");
  })
  .then(function(script) {
    // use functions declared in scripts
    // to show that they indeed loaded
    one();
    two();
    three();
  });
