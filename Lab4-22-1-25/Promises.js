function fetchUserData(userid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const user={id:'venu',name:'venu',type:'premium'}
            resolve(user);
        },1000);
    });
}

function fetchUserSettings(usertype){
    return new Promise((resolve,reject)=>{
        console.log('fteching user settings from user type :',usertype)
    const settings=usertype==='premium'?  {theme:'dark',notification:'true',type:'premium'}:{theme:'light',notification:'false',type:'normal'};
    resolve(settings);
});
}

async function display(){
    let user=await fetchUserData("12c8");
    let settings=await fetchUserSettings(user.type);
    console.log(settings);
}
display()