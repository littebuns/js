function test() {
    // 该变量为全局变量
    message = '123';
}
test();
console.log(message);

function test1() {
    // 该变量为局部变量
    var message = '123';
    console.log("test1");
}
test1();
// 报错 message is not defined
console.log(message);

function test2(){
    console.log(name)
    var name = "abc";
}
test2();

//等同于 test2 变量的声明提升
function test3(){
    var name;
    console.log(name);
    name = "abc";
}
test3();



