//前提：有序数组中查找
function binSearch(arr,data){
    var low = 0;
    var high = arr.length-1;
    while(low<=high){
        var middle = Math.floor((low+high)/2);
        if(arr[middle]<data){
            low = middle + 1;
        }else if(arr[middle]>data){
            high = middle - 1;
        }else{
            return middle;
        }
    }
    return -1;
}
console.log(binSearch([1,3,5,7,9],7));
console.log(12345678..toLocaleString());