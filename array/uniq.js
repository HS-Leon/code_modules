/*
-----------数组去重----------
*/
//--------1----------
function uniq(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (result.indexOf(array[i]) == -1) {
            result.push(array[i]);
        }
    }
    return result;
}
console.log(uniq([1, 2, 3, 2, 1, 4, 5, 4, 3, 2]));

//----------2--hashmap--------
function uniq2(array) {
    var n = {},
        r = []; //n为hash表，r为临时数组
    for (var i = 0; i < array.length; i++) //遍历当前数组
    {
        if (!n[array[i]]) //如果hash表中没有当前项
        {
            n[array[i]] = true; //存入hash表
            r.push(array[i]); //把当前数组的当前项push到临时数组里面
        }
    }
    return r;
}
console.log(uniq2([1, 2, 3, 2, 1, 4, 5, 4, 3, 2]));

//--------3--与1类似---------
function uniq3(array) {
    var n = [array[0]]; //结果数组
    for (var i = 1; i < array.length; i++) //从第二项开始遍历
    {
        //如果当前数组的第i项在当前数组中第一次出现的位置不是i，
        //那么表示第i项是重复的，忽略掉。否则存入结果数组
        if (array.indexOf(array[i]) == i) n.push(array[i]);
    }
    return n;
}
console.log(uniq3([1, 2, 3, 2, 1, 4, 5, 4, 3, 2]));

//---------4--比较------------
/*
 * 这个方法的思路是先把数组排序，然后比较相邻的两个值。 
 * 排序的时候用的JS原生的sort方法，JS引擎内部应该是用的快速排序吧。
 * 最终测试的结果是此方法运行时间平均是第二种方法的三倍左右，不过比第一种和第三种方法快了不少。
 */
function uniq4(array) {
    array.sort();
    var re = [array[0]];
    for (var i = 1; i < array.length; i++) {
        if (array[i] !== re[re.length - 1]) {
            re.push(array[i]);
        }
    }
    return re;
}
console.log(uniq4([1, 2, 3, 2, 1, 4, 5, 4, 3, 2]));

//---------5--ES6  Set------------
function uniq5(array) {
    return [...new Set(array)];
}
console.log(uniq5([1, 2, 3, 2, 1, 4, 5, 4, 3, 2]));