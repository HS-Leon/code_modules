//隐式丢失
function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};



var bar = obj.foo; // 这里bar将引用foo函数本身，所以不带有函数对象的上下文

var a = "oops, global"; // a是全局对象的属性


function person(name,age){
    //特权（私有）方法和属性
    this.name = name;
    this.age = age;
    this.say=function(){
        console.log('hello');
    }
}
//公有
person.prototype.walk=function(){
    alert('walking');
}
function student(name,age,grade){
    this.newMethod = person;
    //冒充person对象，传递特权属性和特权方法给子类
    this.newMethod(name,age);
    this.grade=grade;
}
var s1=new student('Allen','27',3);
//继承person的所有特权属性和方法，不继承公有属性和方法
s1.say();
// s1.walk();


let name = "Allen";
{
	console.log(name);  //cannot
	let name = "Deng";
}
console.log(name);

