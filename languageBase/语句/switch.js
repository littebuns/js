// 如果想要匹配多个条件 可以忽略break 否则会跳出 switch 语句
let i = 25;
switch (i) { 
    case 25: 
    /*跳过*/ 
    case 35: 
    console.log("25 or 35"); 
    break; 
    case 45: 
    console.log("45"); 
    break; 
    default: 
    console.log("other")
}   

// js 的 switch 的条件判断可以使用表达式
let j = 25;
switch (j) { 
    case 50-j : 
    console.log("25 or 35"); 
    break; 
    case 45: 
    console.log("45"); 
    break; 
    default: 
    console.log("other")
}   

// 而传给 switch 语句的参数之所以是 true，就是因为每个条件的表达式都会返回布尔值。条件的表达式分别被求值，直到有表达式返回 true；否则，就会一直跳到 default 语句
let num = 9; 
switch (true) { 
 case num < 0: 
 console.log("Less than 0."); 
 break; 
 case num >= 0 && num <= 10: 
 console.log("Between 0 and 10."); 
 break; 
 case num >= 5 && num <= 10: 
 console.log("Between 5 and 10."); 
 break; 
 case num > 10 && num <= 20: 
 console.log("Between 10 and 20."); 
 break; 
 default: 
 console.log("More than 20."); 
} 