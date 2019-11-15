//求 n ~ m 之间的随机整数 
function randomRange(m,n){
    return Math.floor(Math.random()*(n-m)+m);
}
console.log(randomRange(3,5));