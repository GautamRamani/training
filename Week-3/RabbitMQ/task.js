let num=[1,2,3,4,5,6,7]
let k=3,arr=[],arr1=[],arrf=[];
for(let j=0;j<num.length-k;j++){
    arr1.push(num[k]++)
}
for(let i=0;i<k;i++){
    arr.push(num[0]++)
}
arrf=arr1.concat(arr)
console.log(arrf)