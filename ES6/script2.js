
//this keyword in arrow and normal functions
var user = {
    name: "bala",
    age: 27,
    sayName: function(){
        console.log(`my name is ${this.name}`);//here this.name means user.name
        var fullName = function(){
            console.log(`my name is ${this.name} and my age is ${this.age}`);//u can not use this keyword bcas it is defined inside sayName functon
        }
        fullName();//my name is undefined and my age is undefined
        //fullname will not refer to user object anymore bcas it is defined in sayName function
    }
}
user.sayName();//my name is bala

//To avoid above issues we used to write code like below

var user = {
    name: "bala",
    age: 25,
    sayName: function(){
        console.log(`my name is ${this.name}`);
        var _that = this;
        var fullName = function(){
            console.log(`my name is ${_that.name} my age is ${_that.age}`);
        }
        fullName();//my name is bala my age is 25
    }
}
user.sayName();//my name is bala

//best way to solve this is using arrow functions
var user = {
    name: "bala",
    age: 27,
    sayName: function(){
        console.log(`my name is ${this.name}`);
        var fullName = () => {
            console.log(`my name is ${this.name} my age is ${this.age}`);
        }
        fullName();//my name is bala my age is 27
    }
}
user.sayName();//my name is bala
//Arrow functions doesnt have its own this, they always refers parent object or eclosed object no matter where they are definde
//here arrow function refers user object "this" 

//real time example
var btn = document.getElementById('button');
btn.addEventListener("click", function(){
    var addFun = function(){
        this.style.display = "none";
        
    }
    addFun();//Uncaught TypeError: Cannot set property 'display' of undefined
});

//to make it work u have write code like below

var btn = document.getElementById('button');
btn.addEventListener("click", function(){
    var _that = this;
    var addFun = function(){
        _that.style.display = "none";
        
    }
    addFun();
});

//best way is using arrow function
var btn = document.getElementById('button');
btn.addEventListener("click", function(){
    var addFun = () => {
        this.style.display = "none";
    }
    addFun();
});