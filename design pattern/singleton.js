// 保证一个类仅有一个实例，并提供一个访问它的全局访问点

// 适用于弹框的实现，全局缓存

//通用
function getSingleton(fn){
    var instance = null;

    return function(){
        if(!instance){
            instance = fn.apply(this,arguments);
        }
        return instance;
    }
}

//构造器
function SetManager(name) {
    this.manager = name;
}
SetManager.prototype.getName = function() {
    console.log(this.manager);
};

//获取单例
var managerSingleton = getSingleton(function(name) {
    var manager = new SetManager(name);
    return manager;
});


managerSingleton('a').getName(); // a
managerSingleton('b').getName(); // a
managerSingleton('c').getName(); // a


