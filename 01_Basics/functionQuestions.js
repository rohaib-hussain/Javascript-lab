// Here are different types of Practice Questions related to Functions 




//Q1: What's the difference between function declaration and expression in terms of hoisting?

//Ans1: function declaration can be hoisted and function expression cannot be hoisted.

//Hoisting in Statement & declaration.
// funcName();

// function funcName(){
//   console.log(`can be Hoisted`);
  
// }

//Hoisting in Expression function
// number();
// let a = 200;
// function number(){
//   console.log(200 `cannot hoist`);
  
// }





//Q2: what log will be for this function:
// greet();
//function greet(){
// console.log("Hello!");
//}

//Ans2:can hoist, log : "Hello!"
//  greet();
// function greet(){
// console.log("Hello!");
// }





// Q3:convert the function into arrow function.
// function multiply(){
//   return a*b;
//  }

//Ans3: 
//   let multiply = (a,b)=>{
//    return a*b;
// };
// console.log(5*3);




// Q4: Identify Paramters and arguments?
//  function welcome(name){ 
//   console.log(`Rohaib`);
//  }
//  welcome();

//Ans4: name is a parameter.
// `Rohaib` the value is Argument




//Q5: Predict the output?
//   function sayHi(name = "Guest"){
//    console.log("Hi" ,name);
//  }
//  sayHi();
//Ans5: output is : Hi Guest




//Q6:what does ...Operator mean in parameters?
//Ans6: Rest Operator.=> different values in one variable .
// function restOpert(...val){
//   console.log(val);
  
// }
// restOpert(1,2,3,4,5,6,7);





//Q7: Use rest parameter to accept any number of scores and return the total.

//Ans7:
// function getScore(...scores){
// let total = 0;
// scores.forEach(function(val){
// total = total + val;
// });
//   return total; 
// }
// console.log(getScore(10,12,14,18));

            //practice is a great way for understanding a concept//
