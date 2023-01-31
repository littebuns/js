/* 
    1. 浮点数
*/
let num1 = 0.1;
let num2 = 0.2;
//0.30000000000000004
console.log(num1 + num2);
if(num1 + num2 == 0.3){
    console.log(num1 + num2);
}

//科学计数法
let num3 = 3.14e17
console.log(num3);
console.log("=================");


/* 
    2. 值的范围
*/
//无穷值
let result = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(result);
//确定一个是不是有限大
console.log(isFinite(result));
console.log("=================");


/* 
    3. NaN  not a number
*/
// 所有涉及NaN的操作始终返回NaN     NaN不等于任何值 包括NaN
let num4 = 0/0;
console.log(num4);
console.log(NaN == NaN);

//确定一个值是否为NaN
console.log(isNaN(num4));
console.log(isNaN(NaN));
console.log(isNaN(false));
console.log(isNaN("哈哈"));
console.log(isNaN("1"));
console.log("=================");



/* 
    4. 数值转换
*/
//Number()
console.log(Number("hello"));
console.log(Number("02942"));
console.log(Number(""));
console.log(Number(true));
console.log("=================");

//parseInt() 获取整数
console.log(parseInt(""));
console.log(parseInt("1234blue"));
console.log(parseInt("0xA")); //十六进制
//可以指定进制数
console.log(parseInt("A", 16));

//parseFloat()  获取浮点数 只能解析十进制
console.log(parseFloat("22.34.5"));
console.log(parseFloat("0xA"));






