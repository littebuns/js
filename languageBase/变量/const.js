//使用const 声明变量时 ①必须要初始化变量 ②不能修改声明的变量值(引用)
const age = 16;
//age = 15; 报错

const person = {};
person.name = "xxb";
//const 只限制引用值不能改变  引用的对象还是可以修改的
console.log(person);