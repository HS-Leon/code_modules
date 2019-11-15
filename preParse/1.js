console.log(a);
var a=1;
console.log(a);
function a(){
    console.log(2);
}
console.log(a);
var a=3;
console.log(a);
function a(){
    console.log(4);
}
console.log(a);
// a();
//result:
/*
f a(){
    console.log(4);
}
1
1
3
3
TypeError: a is not a function
*/
/*
reason:

预解析：
a是function，log(4)

执行：
f a(){
    console.log(4);
}
var a=1;
1
跳过第一个a()
1
var a=3;
3
跳过第二个a()
3
a是变量，不是函数，无法执行报错TypeError: a is not a function
*/

var b = 2;
b = 3;
console.log(b);

var result = [];
for(var i=0;i<10;i++){
    result[i]=function(){
        return i;
    }
}
console.log(result[0]());
console.log(result[1]());
console.log(result[9]());