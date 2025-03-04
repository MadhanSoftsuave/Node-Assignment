// let app=new Promise((resolve,reject)=>{
//     if(2%2==0)
//         resolve("done");
//     else 
//         reject("not");
// });
// app.then((message)=>{
//     console.log(message);
// })
// .catch((Error)=>{
//     console.log(Error);
// })

// Promise.all([
//     Promise.resolve("task 1"),
//     Promise.resolve("task 2"),
//     Promise.reject("task 3")
// ]).then((result)=>{
//     console.log(result);
// }).catch((Error)=>{
//     console.log(Error);
// })

//promise.allsettled
// Promise.allSettled([
//     Promise.resolve("task 1"),
//     Promise.resolve("task 2"),
//     Promise.resolve("task 3")
// ])
// .then((message)=>{
//     console.log(message);
// })
// .catch((Error)=>{
//     console.log(Error);
// })

//promise.race()
// Promise.race([
//     new Promise((resolve)=>
//         setTimeout(() => {
//             resolve("task 1");
//         }, 1000)),
//     new Promise((resolve,reject)=>
//         setTimeout(() => {
//             reject("task 2");
//         }, 500))
// ])
// .then((mes)=>{
//     console.log(mes);
// })
// .catch((err)=>{
//     console.log(err);
// })

// Promise.any([
//     Promise.reject("task 1"),
//     Promise.reject("task 2"),
//     Promise.resolve("task 3")
// ])
// .then((mes)=>{
//     console.log(mes);
// })
// .catch((Error)=>{
//     console.log(Error);
// })

//using resolve
// Promise.resolve("done")
// .then((mes)=>{
//     console.log(mes);
// });

//using reject
// Promise.reject("done")
// .catch((err)=>{
//     console.log(err);
// })
