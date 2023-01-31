/* 
    undefined 类型只有一个特殊值 undefined 
    当定义变量的时候没有初始化 其实就是赋予了 undefined 值
*/

//两个写法是相同的
let str1;
console.log(str1);

let str2 = undefined;
console.log(str2);

if(!str1){
    console.log("!str为true");
}

/* if(age){
    console.log("age为true");
}
 */