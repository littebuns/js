/**
 * 如果 构造函数返回的是一个对象 则会返回 return 指定的对象 
 * @returns 
 */

var Dog = function () {
    this.name = 'xj';
    return 100;
}

console.log((new Dog()) === 100);
console.log((new Dog()));

var Cat = function () {
    this.name = "xj";
    return { name: "xxb" };
}
console.log(new Cat().name);

console.log("================");
/**
 * new.target 
 * 如果当前函数是用 new 调用的 则 new.target 指向当前函数 否则为 undefined
 * 可以使用该特性来判断该函数调用的时候是否使用 new 命令
 */
var bird = function () {
    console.log(new.target);
    if (!new.target) {
        throw new Error('请使用 new 命令调用');
    }
}
new bird();
try {
    bird();
} catch (error) {
    console.log(error.message);
}


console.log("================");
/**
 * Object.create()
 * 有时候没有构造函数 只有一个现有的对象 
 * 可以以这个对象为模板
 */

var person1 = {
    name: "xxb",
    greeting: function(){
        console.log("Hi, my name is" + this.name);
    }
}
var person2 = Object.create(person1);
console.log(person2.name);
person2.greeting();