// 其他类型的值都有相应的布尔值的等价类型  使用 Boolean() 转型函数

//String 
console.log(Boolean("str"));
console.log(Boolean(""));

//Object
let user = {};
console.log(Boolean(user));
console.log(Boolean(null));

//Number
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(NaN));

//Undefined 
console.log(Boolean(undefined));

