class Car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
}
const myCar1=new Car("Ford",2014);
const myCar2=new Car("BMW",2015);

console.log(myCar1.name+" "+myCar1.year);
console.log(myCar2.name+" "+myCar2.year);