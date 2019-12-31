

// function first(){
//     // Simulate a code delay
//     setTimeout( function(){
//       console.log(1);
//     }, 2000 );
//   }
//   function second(){
//     console.log(2);
//   }
//   first();
//   second();

// function doHomework(subject, callback){
//     alert(`i started my ${subjec} work`);
//     callback();
// }

// doHomework("math", function(){
//     alert("finished homework")
// });

// function loadScript(src) {
//     return new Promise(function(resolve, reject) {
//       let script = document.createElement('script');
//       script.src = src;
  
//       script.onload = () => resolve(script);
//       script.onerror = () => reject(new Error(`Script load error for ${src}`));
  
//       document.head.append(script);
//     });
//   }

// loadScript("/article/promise-chaining/one.js")
//   .then(function(script) {
//     return loadScript("/article/promise-chaining/two.js");
//   })
//   .then(function(script) {
//     return loadScript("/article/promise-chaining/three.js");
//   })
//   .then(function(script) {
//     // use functions declared in scripts
//     // to show that they indeed loaded
//     one();
//     two();
//     three();
//   });


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
//   let promise2 = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
//   let promise3 = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

// promise.then(
//   script => alert(`${script.src} is loaded!`),
//   error => alert(`Error: ${error.message}`)
// );
// promise2.then(
//     script => alert(`${script.src} is loaded!`),
//     error => alert(`Error: ${error.message}`)
//   );
//   promise2.then(
//     script => alert(`${script.src} is loaded!`),
//     error => alert(`Error: ${error.message}`)
//   );

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