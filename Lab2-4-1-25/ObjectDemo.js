//Creating a javascript Object
const person={};

person.firstName="venu";
person.lastName="Gopal";
person.age=19;
person.branch="It-B";

console.log(person.firstName+" "+person.lastName+"  is studying in  "+person.branch);

//Using New keyword
const person1=new Object();
person1.firstName="Dhruva";
person1.lastName="Theratipaly";
person1.age=19;
person1.branch="It-B";
console.log(person1.firstName+" "+person1.lastName+"  is studying in  "+person1.branch);

//Using Object Constructor
function Person2(first,last,age,branch){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.branch=branch;
}
const p1=new Person2("venu","Gopal",19,"It-B");
console.log(p1.firstName+" "+p1.lastName+"  is studying in  "+p1.branch+" and his age is "+p1.age);
