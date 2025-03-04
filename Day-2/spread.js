//using spread
// let a=[1,2,3];
// let b=[...a,5,6];
// console.log(b);

//min/max using spread
//let a=[1,2,3,4,0];
// console.log(Math.min(a)); //NaN
//console.log(Math.min(...a));

//array element as function argument
// let a=[1,2,3];
// function myfun(x,y,z)
// {
//     console.log(x,y,z);
// }
// myfun(...a);

//coping array
// let a=[1,2,3];
// let b=[...a];
// console.log(b);

//spread operator in object
// let obj={
//     name:"kumar",
//     class:"ece"
// }
// const ano={...obj};
// console.log(ano.name);

//merge object
let obj1={
    name:"madhan",
    age:21
}
let obj2={
    class:"ece"
}
let obj={...obj1,...obj2};
console.log(obj);
