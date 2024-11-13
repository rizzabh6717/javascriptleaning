const arr=new Array (1,2,3,4,5)
//console.log(arr);

//arr.push(6)
//arr.push(7)
//arr.push(8)
//arr.pop()
//console.log(arr);

//arr.unshift(9)
//console.log(arr)
//arr.shift()
//console.log(arr)

//slice and splice
console.log("a" + arr.slice(1,3))
console.log(arr)
console.log("b" + arr.splice(1,3))
console.log(arr)  //  changed

//++++++++++++++++++++++++++++++++++++

const arr1 =["ironman","hulk","hawk"]
const arr2 =["superman","batman","flash"]

 //arr1.push(arr2)   //array into another array
//console.log(arr1)
//const arr3=arr1.concat(arr2)
//console.log(arr3)

//console.log(Array.isArray(arr1))

const arr4=Array.from("rishabh")
console.log(arr4)
let score1=100
let score2=200
let score3=300
const arr5=Array.of(score1,score2,score3)
console.log(arr5)

