//const teammates=[{name:"dharshini",age:21},{name:"sowmiya",age:21},{name:"sangeetha",age:21}];
//const teammateNames=teammates.map(teammate => teammate.name);
//console.log(teammateNames);

//const stud={name:"dharsh",dept:"cse",mark:90,great()
   // {return"hello "+this.name;}};   
//console.log(stud.great());
 
//const prices = [120, 60, 899];
//const total = prices.reduce((sum, price) => sum + price, 0);
//console.log(total);

const students = [
    { name: "Asha", marks: 85 },
    { name: "Kiran", marks: 92 },
    { name: "Ravi", marks: 78 }
];

//const student = students.find(s => s.name === "Kiran");
//if (student) {
   // console.log(student.marks);
//} else {
    //console.log("Not found");
//}


function makeGreeter(greeting) {
    return function(name) {
        return `${greeting} ${name}`;
   };
}
const greet = makeGreeter("Hello");
console.log(greet("Asha"));


