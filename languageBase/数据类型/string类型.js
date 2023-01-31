/* 
    ① 转换为字符串
*/
// toString() 方法  
//null 和 undefined 没有该方法
let var1 = 10;
let var2 = null;
let var3 = undefined;
console.log(var1.toString());
// console.log(var2.toString());
// console.log(var3.toString());

//String()
// 如果不确定该值为 null 或 undefiend 用 String() , 会返回字面量
console.log("============");


/* 
    2. 模板字面量
*/
let var4 = `fds
ddd`;
let var5 = 'fds\nddd';
console.log(var4);
console.log(var5);
console.log(var4 == var5);

// 支持字符串插值
let var6 = `
值为: ${var1 + var1} 
`;
console.log(var6);
console.log("============");


/* 
    3. 标签函数
*/
// 标签函数 自定义插值行为
function simpleTag(string, aVal, bVal, sumVal){
    console.log(string);    //保存的是被分割符分割后的数组
    console.log(aVal);      // 第一个表达式的求值结果
    console.log(bVal);      // 第二个表达式的求值结果
    console.log(sumVal);
    return "simpleTag";
}
//可变参数
function simpleTag1(string, ...expressions){
    console.log(string);
    for(const expression of expressions){
        console.log(expression);
    }
}
let aVal = 6;
let bVal = 10;
let var7 = `${aVal} + ${bVal} = ${aVal + bVal}`;
let var8 = simpleTag`${aVal} + ${bVal} = ${aVal + bVal}`;
let var9 = simpleTag1`${aVal} + ${bVal} = ${aVal + bVal}`;
console.log(var7);
console.log(var8);
//返回默认值
function simpleTag3(string, ...expressions){
    return string[0] + expressions.map((e,i)=>`${e}${string[i+1]}`).join('');
}
let var10 = simpleTag3`${aVal} + ${bVal} = ${aVal + bVal}`;
console.log(var10);
console.log("============");



/* 
    4. 原始字符串
*/

console.log(`abc\nbdc`);
console.log(String.raw`abc\nbdc`);
    