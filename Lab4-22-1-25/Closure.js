function outer(name){
    var msg="welcome";
    function inner(){
        console.log(msg," ",name)
    }
    return inner;
}
inner=outer("venu");
inner()