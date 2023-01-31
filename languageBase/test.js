function setName(obj) {
    obj.name = "Nicholas";
    obj = new Object();
    obj.name = "Greg";
}
let person = new Object();
setName(person);
console.log(person.name); 

let list = new Array();
list.push("dfs");
list.push("fdsa")
console.log(JSON.stringify(list)); 