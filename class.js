// class Person{
//     constructor(name,habit,job){
//         this.name = name;
//         this.habit = habit;
//         this.job = job;
//     }
//     namefun(){
//         console.log(this.name);
//     }
//     habitfun(){
//         console.log(this.habit);
        
//     }
//     jobfun(){
//         console.log(this.job);

//     }
// }
// let newPerson = new Person("vinith","coding","Full stack Developer");
// newPerson.namefun();
// newPerson.habitfun();
// newPerson.jobfun();
// console.log(" ");
// let newPerson2 = new Person("vin","hacking","White Hacker");
// newPerson2.namefun();
// newPerson2.habitfun();
// newPerson2.jobfun();
function oddishOrEvenish(num) {
	let strNum = num.toString();
	let arrayNum = strNum.split("");
	let reduceFunction = (acc,value)=>{
        let values = Number(value);
		return acc+values;
	}
   const result = arrayNum.reduce(reduceFunction,0)
	return (result%2===0)?"Evenish":"Oddish";
}
console.log(oddishOrEvenish(43))