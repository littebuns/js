/**
 * 如果 构造函数返回的是一个对象 则会返回 return 指定的对象 
 * @returns 
 */ 

var Dog = function(){
    this.name = 'xj';
    return 100;
}

console.log((new Dog())===100);
console.log((new Dog()));

var Cat = function(){
    this.name = "xj";
    return {name:"xxb"};
}
console.log(new Cat().name);