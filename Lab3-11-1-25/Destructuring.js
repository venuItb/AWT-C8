//Array Destructuring
const numbers=[1,2,3,4,5,6];
const [first,second,third,...fourth]=numbers;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

const [first1,...second2]=numbers;
console.log(first1);
console.log(second2);

//Object Destructuring
const person={
    fname:"venu",
    lname:"gopal",
    age:20
}
const {fname:fn,lname:ln,age:a}=person;
console.log(fn);
console.log(ln);
console.log(a);

