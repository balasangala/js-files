//Issues with var
//1.function scoping, 2.Hoisting
//function scoping-->variable that is defined within the function is available throught the function

//var fallows function scoping
// function x(){
//     var y = 2;//this y will be accessable throught the function
    
    

// }
// x()//

/*function x(){
    var y = 2;
    if(true){
        console.log(y);//2
    }
}
x(); */
// here we have defined outside if condition means it is not block so it will work like var only.
/*function x(){
    let y = 2;
    if(true){
        console.log(y);//2
    }
}
x(); */


//scoping issue with var
/*function x(){
    
    if(true){
        var y = 2;// this y availale throght out function x
        console.log(y);//2
    }
    console.log(y);//2
}
x(); */

//let resolve above issue
//Block scoping(variables defined within body of open & closing cury brackets(ex: if & for loolp body's) will be avilable only within that brackets )

// function x(){
    
//     if(true){
//         let y = 2;// this y available only within if statement curly brackets
//         console.log(y);//2
//     }
//     console.log(y);// Uncaught ReferenceError: y is not defined
// }
// x();

//java script has lexical scoping---> variable defined outside available inside also

// function x(){
//     var y = 1;
//     function z(){
//         console.log(y);
//     }
//     z();
// }
// x();

//2.Hoisting

/*function x(){
    
    console.log(y);//undefinde--> means y is defined but value is assigned
    var y = 2;
}
x(); */

/*function x(){
    console.log(y);//Uncaught ReferenceError: y is not defined
    let y=2;
}
x();*/

//variable without var or let or const always treat as global variable

/*function x(){
    y=2
    console.log(y);//2
}
x();
console.log(y);//2 */

//interview question

/*var y = 2;
function x(){
    console.log(y);//undefined
    var y = 1;
}
x();*/

//other examples of block scope

/*function start(){
    for(var i= 0; i<5; i++){
        console.log(i);//0 1 2  4
    }
    console.log(i)//0 1 2 3 4 5//var is not limited to block scope it is function sope---this is issue with var
}
start();*/

/*function start(){
    for(let i= 0; i<5; i++){
        console.log(i);//0 1 2  4
    }
    console.log(i)//Uncaught ReferenceError: i is not defined(let resolve above issue)
}
start();*/

//other exmpl
/*function start(){
    for(var i= 0; i<5; i++){
        if(true){
            var color = "red";
        }
    }
    console.log(color)//red
}
start();*/

/*function start(){
    for(var i= 0; i<5; i++){
        if(true){
            let color = "red";
        }
    }
    console.log(color)//Uncaught ReferenceError: color is not defined
}
start();*/
