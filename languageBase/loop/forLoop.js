for(var i = 0; i < 10; i++){
    console.log(i);
}

var arr = [1,2,3,4,5];
for(const number in arr){
    console.log(number);
}

// for of 会根据可迭代对象的next() 方法产生的值迭代元素
for(const el of [2,6,4,8]){
    console.log(el);
}

