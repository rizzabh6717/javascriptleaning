// function sayMyName(){
//     console.log("r");
//     console.log("I");
//     console.log("s");
//     console.log("h");
//     console.log("a");
//     console.log("b");
// }

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

//function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
   // return number1 + number2
//}

//const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


//function loginUserMessage(username = "sam"){
//    if(!username){
 //       console.log("PLease enter a username");
//        return
  //  }
//    return `${username} just logged in`
//}

// console.log(loginUserMessage("rishabh"))
// console.log(loginUserMessage("rishabh"))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function calculate(...num1){             //gives ana array  rest operator (...)
//     return num1;
// }
// console.log(calculate(200,300,400));

// const user = {
//     username: "hitesh",
//     price: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

//  //handleObject(user)
// handleObject({username:"rishabh",  price:100})

// const arr=[100,200,300,400]
// function printarray(array)
// {
//     console.log(`numbers are ${array}`)
// }
// printarray(arr)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//this is  object.
// const user = {
//     username: "rishabh",,

//     welcomeMessage: function() {                               // we can declare a function like this welcomemessage is a function
//         console.log(`${this.username} , welcome to website`);
        
//     }

// }
// user.welcomeMessage()


// function chai(){
//     let username = "rishabh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {                              //ARrow funtions type
//     let username = "rishabh"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {                    //for curly {} we need to write return 
//     return num1 + num2
// }

 //const addTwo = (num1, num2) =>  num1 + num2

 const addTwo = (num1, num2) => ( num1 + num2 )

//const addTwo = (num1, num2) => ({username: "rishabh"})


console.log(addTwo(3, 4))




// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('rishabh')