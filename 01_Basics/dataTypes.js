// there two types of variable 
// primitive type and reference type

//Following are primitive Types:
// 1."string" , 2. Num , 3.Boolean , 4.Undefined , 5.Null , 6.symbol , 7.BigInt .
// when try to change these types of variable it gives us original copy's .


//Following are reference Types:
// 1.{array} , 2. [object] , 3. (function)
// when we try to change this variables , it gives us the reference of the parent variable mean it give us and changed original value not gives us copy of the the parent variable .


// Type coersion :
// type coersion in js is js convert automatically one data type into another data type by itself .
//  a = 1 + "1"
//  console.log(a) , so it concatinated number into string which gives us "11" not 2 . but it happen on + operator only .

// a = 1-"1"
// console.log(a) , it gives us 0 in return not "11" by itself .

// so these kind of conversion of data type which js engine do by itself called type coersion . b/c coersion depend on operators .