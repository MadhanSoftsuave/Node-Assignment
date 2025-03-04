//array destructuring
// const a=[1,2,3,4];
// let [x,,y,z]=a;
// console.log(x,y,z);

//using rest operator
// let [f,...l]=[1,2,3,4];
// console.log(f,l);

//destructuring assignment
// let a=10, b=20;
// [a,b]=[b,a];
// console.log(a,b);

//object destructing

// ({name,sec}={name:"madhan",cl:"ece",sec:'A'});
// console.log(name);
// console.log(sec);
// ({ x, y} = { x: "mad", y: 20 });
// console.log(x); // 10
// console.log(y); // 20

//object destructing using rest operator
// ({x,...z}={x:1,y:2,z:3});
// console.log(x,z);

//nested object destructing
// let obj={obj1:{name:"madhan",sec:"ece"}};
// ({obj1:{name,sec}}=obj);
// console.log(name,sec);

// let obj={obj1:{name:"madhan",sec:"ece"}};
// let {obj1:{name:name1,sec:sec1}}=obj;
// console.log(name1,sec1);

