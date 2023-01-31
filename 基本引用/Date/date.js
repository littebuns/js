let now = new Date()
console.log(now);

//如果把日期传给 Date 构造函数 会自动调用 parse() 方法
new Date("May 23, 2022");
new Date(Date.parse("May 23, 2022"));

//尝试把这个字符串转换为毫秒数
let parseDate = Date.parse("2022.11.14");
console.log(parseDate);


//UTC 也返回毫秒数  年 月 日 时 分 秒 毫秒  年月是必须的
let utcDate = Date.UTC(2022,1,2)
console.log(utcDate);

let allFives = new Date(2005, 4, 5, 17, 55, 55); 
console.log(allFives);

console.log(Date.now()); 