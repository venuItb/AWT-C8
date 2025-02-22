function doubleAfterEveryOneSeconds(a){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve(a*2);
        },1000);
    });
}
async function display(){
    let a=await doubleAfterEveryOneSeconds(10);
    let b=await doubleAfterEveryOneSeconds(20);
    let c=await doubleAfterEveryOneSeconds(30);
    console.log(a+b+c)
}
display();