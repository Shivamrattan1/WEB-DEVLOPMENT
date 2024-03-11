// function PersonMaker(name,age){
//     const person={
//         name :name,
//         age : age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);
//         }
//     };
//     return person;
// }
// function Person(name,age){
//     this.name = name;
//     this.age=age;
//     console.log(this);
// }
// Person.prototype.talk=()=>{
//     console.log(`Hi, my name is ${this.name}`);
// }
// let p1=PersonMaker("adam",25);
// let p1 = new Person("adam",34);
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}