//判断一个数是(不是7的倍数
/*
思路：一个数可以拆成 n=10a+b
b为各位，a是十位及以上
2n = 20a + 2b = 21a - a + 2b
只需判断a-2b是不是7的倍数
这样递归，时间复杂度就很小了
*/
function validateTimesOfSeven(number){
    if(number<0){
        return validateTimesOfSeven(-number);
    }
    if(number==0||number==7){
        return true;
    }
    if(number<10){
        return false;
    }
    return validateTimesOfSeven(Math.floor(number/10)-2*(number%10));
}
console.log(validateTimesOfSeven(693));