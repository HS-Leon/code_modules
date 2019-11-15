// 驼峰法
function camelback(str){
    var arr = str.split('-');
    var newStr = arr[0];
    for(var i=1;i<arr.length;i++){
        newStr += arr[i].charAt(0).toUpperCase() + 
        arr[i].slice(1);
    }
    return newStr;
}
console.log(camelback('background-color'));
console.log(camelback('border-left-color'));



//找到字符串中只出现一次的字符
function validatePalindrome(str){
    var result = [];
    for(var i=0;i<str.length;i++){
        var char = str.charAt(i);
        if(str.indexOf(char)==str.lastIndexOf(char)){
            result.push(char);
        }
    }
    return result;
}
console.log(validatePalindrome('abcdca'));