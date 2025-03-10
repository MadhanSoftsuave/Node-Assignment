function mul(x)
{
    return x*10;
}
async zfun() {
    await new Promise((resolve,reject)=>{
        if(2%2==0)
            resolve("done");
        else
        reject("not");
    })
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.log(err);
    })
    console.log("hai");
    }
fun();