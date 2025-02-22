//Demonstration of "Let" keyword
let a=10;
{
    let a=20;
    console.log("Value of a in block scope using let keyword "+a);
}
console.log("Value of a in global scope using let keyword "+a);


//Demonstration of "Var" keyword
var b=10;
{
    var b=20;
    console.log("Value of b in block scope using var keyword "+b);
}
console.log("Value of b in global scope using var keyword "+b);

//demonstration of "const" keyword
const c=10;
{
    const c=20;
    console.log("Value of c in block scope using const keyword "+c);
}
console.log("Value of c in global scope using const keyword "+c);