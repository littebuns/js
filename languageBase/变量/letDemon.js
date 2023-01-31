// var 函数作用域
if(true){
    var name = "5";
}
console.log(name);

// let 块作用域
if(true){
    let name1 = "5";
}
// 报错 undefined
// console.log(name1);

let name1 = "";
var name = "";

console.log(window.name);

<script>
    var name = "abc";
    var age = 18;
</script>