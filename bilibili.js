function print(arg){
    console.log(arg);
}


var r1 = ['10','10','10','10','10'].map(parseInt);
print(r1);//[ 10, NaN, 2, 3, 4 ]


var a={x:1,y:2};
var b=[1,2];
var c=1;
var o = {a:a,b:b,c:c}
a.x=6;
print(o.a.x);//6

print(JSON.stringify({a:undefined}));//{}
print(JSON.stringify({a:null}));//{"a":null}

var age = 100;
let years =6;
if(age>1){
    let age = 10;
    //var years = age*3;
    //Identifier 'years' has already been declared
}
print(`${years} years`);
// 6 years

var a={};
var b={key:'b'}
var c={key:'c'}
a[b]='b';
a[c]='c';
print(a[b]);//c
print(a[c]);//c,b被c覆盖
print(a);//{ '[object Object]': 'c' }

//a标签中href和click执行顺序
//link prefetch、preload、as=style