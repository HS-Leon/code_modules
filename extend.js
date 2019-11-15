function person(){
    this.name = 1;
    this.say = function(){
        console.log(this.name);
    }
}

function student(){
    this.grade = 2;
    this.go = function(){
        console.log(this.grade);
    }
}
student.prototype = new person();
var obj = new student();
obj.go();
obj.say();