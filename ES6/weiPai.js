const obj1 = {
    a: 1,
    func: () => {
        console.log(this, this.a);
    },
    func2: function () {
        console.log(this, this.a);
    },
    func3:function(){
        ()=>{
            console.log(this, this.a);
        }
    }
}
const obj2 = {
    a: 2
}
// console.log(obj1.func.bind(obj2)());
// console.log(obj1.func2.bind(obj2)());
// obj1.func();
// obj1.func2();
obj1.func3();
/*
result:
window undefined
undefined
 */
/**
 * 原因
 * 
 */

var module = {
    x: 42,
    getX: function () {
        return this.x;
    }
}

var unboundGetX = module.getX;
console.log(unboundGetX());
// The function gets invoked at the global scope
// 函数在全局范围内被调用
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42

var a = 11;
function test2() {
    this.a = 22;
    let b = () => { console.log(this.a) }
    b();
}
var x = new test2();
console.log(x);