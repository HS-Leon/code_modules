//随机排序
console.log([1,2,3,4,5,6,7,8,9,10].sort(function(){
    return Math.random()-0.5;
}))


function random(arr){
    for(var i=0;i<arr.length;i++){
        var randomIndex = parseInt(Math.random()*arr.length);
        [arr[i],arr[randomIndex]] = [arr[randomIndex],arr[i]];
    }
    return arr;
}
console.log(random([1,2,3,4,5,6,7,8,9,10]))