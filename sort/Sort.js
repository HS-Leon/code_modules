//快排 O(nlogn)
//不稳定 worst：O(n^2)
//标准版
/*
i=left,j=right,flag=0
j左移找到比flag小的，交换，flag=j
i右移找到比flag大的，交换，flag=i
直至i=j，完成一次操作
划分数组，对两边再次重复
*/
//左移，交换小的，右移，交换大的，直到i==j
function StandQuickSort(arr){
    if (arr.length<2) { return arr; }
    // 定义左指针
    var left=0;
    // 定义右指针
    var right=arr.length-1;
    //开启每一轮的排序
    while(left<right){
      // 寻找右边比arr[0]小的数的下标
      while(arr[right]>=arr[0] && left<right){
        right--;
      }
      // 寻找左边比arr[0]大的数的下标
      while(arr[left]<=arr[0] && left<right){
        left++;
      }
      //当左边指针与右边指针相遇后，交换arr[0]与当前两个指针所在的元素
      if (right==left) {
        [arr[right],arr[0]] = [arr[0],arr[right]];
        break;
      }
      // 当左指针小于右指针的位置，交换两个指针当前位置的元素
      [arr[left],arr[right]] = [arr[right],arr[left]];
    }
    //递归实现
    // return arr;
    return StandQuickSort(arr.slice(0,left)).concat(arr.slice(left,right+1)).concat(StandQuickSort(arr.slice(right+1)));
}
console.log(StandQuickSort([2,5,7,3,4,23,5,7,12,9]));

//简版
var quickSort = function(array){
    if(array.length<=1){
        return array;
    }
    var pivot = array[0];
    var left = [];
    var right = [];
    for(var i=1;i<array.length;i++){
        if(array[i]>pivot){
            right.push(array[i]);
        }else{
            left.push(array[i]);
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));
}
console.log(quickSort([2,5,7,3,4,23,5,7,12,9]));
console.log([2,5,7,3,4,23,5,7,12,9].sort((a,b)=>{
    return a-b
}));


//冒泡 O(n^2)
//稳定  最好情况: O(n)
//需要  O(1) 的辅助空间
function bubble(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}
console.log(bubble([2,5,7,3,4,23,5,7,12,9]));



//归并排序
//分治法  O(nlogn)  
//最坏情况 O(n^2)
//需要O(n)辅助空间

// 将数组分为左和右两部分,然后继续将左右两部分继续(递归)拆分,
// 直到拆分成单个为止;然后将拆分为最小的两个数组,进行比较,
// 合并排成一个数组.接着继续递归比较合并.直到最后合并为一个数组
function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    var middle = Math.floor(arr.length/2);
    var left = arr.slice(0,middle);
    var right = arr.slice(middle);
    return merge(mergeSort(left),mergeSort(right));
}
function merge(left,right){
    var result = [];
    while(left.length && right.length){
        if(left[0]<=right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    while(left.length){
        result.push(left.shift());
    }
    while(right.length){
        result.push(right.shift());
    }
    return result;
}
console.log(mergeSort([2,5,7,3,4,23,5,7,12,9]));


//选择排序
//每次选择未排序序列最小数，存到已排序序列的起始位置，直至为排序序列为空
//不稳定：快选希堆
//空间复杂度 O(1) : 冒选插希堆
function select(arr){
    var minIndex;
    for(var i=0;i<arr.length-1;i++){
        minIndex = i;
        for(var j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        [arr[minIndex],arr[i]] = [arr[i],arr[minIndex]];
    }
    return arr;
}
console.log(select([2,5,7,3,4,23,5,7,12,9]));


//插入排序，左边为有序序列，右边为待排（扑克牌插牌）
//第一个元素默认已排序
function insert(arr){
    for(var i=1;i<arr.length;i++){
        for(var j=i;j>0;j--){
            if(arr[j]<arr[j-1]){
                [arr[j],arr[j-1]]=[arr[j-1],arr[j]];
            }else{
                break;
            }
        }
    }
    return arr;
}
console.log(insert([2,5,7,3,4,23,5,7,12,9]));
