//------------------数组扁平化---------------------------------------

//-----------------1. 递归----------------------------------
function flatten1(arr) {
    let arr1 = []
    arr.forEach((val) => {
        if (val instanceof Array) {
            arr1 = arr1.concat(flatten1(val))
        } else {
            arr1.push(val)
        }
    })
    return arr1
}
console.log(flatten1([1,2,[3,4,5,[6,7,8],9],10,[11,12]]));



//-----------------2. reduce---------------------------------
function flatten2(arr){
    return arr.reduce((prev,cur)=>{
        return prev.concat(Array.isArray(cur)?flatten2(cur):cur)
    },[])
}
console.log(flatten2([1,2,[3,4,5,[6,7,8],9],10,[11,12]]));



//-----------------3. 扩展运算符---------------------------------
function flatten3(arr){
    let arr1 = [];
    let bStop = true;
    arr.forEach((val)=>{
        if(Array.isArray(val)){
            arr1.push(...val);
            bStop = false
        }else{
            arr1.push(val)
        }
    })
    if(bStop){
        return arr1;
    }
    return flatten3(arr1)
}
console.log(flatten3([1,2,[3,4,5,[6,7,8],9],10,[11,12]]));



//-----------------4. toString---------------------------------
var arr = [1,2,[3,4,5,[6,7,8],9],10,[11,12]];
let arr1 = arr.toString().split(',').map((val)=>{
    return parseInt(val)
})
console.log(arr1);



//-----------------5. apply---------------------------------
function flatten5(arr){
    while(arr.some(item => Array.isArray(item))){
          arr =  [].concat.apply([],arr);
    }
     return arr;
}
console.log(flatten5([1,2,[3,4,5,[6,7,8],9],10,[11,12]]));
