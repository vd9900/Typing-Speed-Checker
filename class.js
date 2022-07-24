class Person{
    constructor(name,habit,job){
        this.name = name;
        this.habit = habit;
        this.job = job;
    }
    namefun(){
        console.log(this.name);
    }
    habitfun(){
        console.log(this.habit);
        
    }
    jobfun(){
        console.log(this.job);

    }
}
let newPerson = new Person("vinith","coding","Full stack Developer");
newPerson.namefun();
newPerson.habitfun();
newPerson.jobfun();
console.log(" ");
let newPerson2 = new Person("vin","hacking","White Hacker");
newPerson2.namefun();
newPerson2.habitfun();
newPerson2.jobfun();