const student = [
    { name: "abul", age: 23, marks: 95 },
    { name: "Cabul", age: 13, marks: 85 },
    { name: "Kabul", age: 20, marks: 55 },
    { name: "Tabul", age: 17, marks: 15 },
    { name: "Babul", age: 20, marks: 75 }
];

// kono kichu niye ashte chai -> map
const names = student.map(student => student.name);
// console.log(names);

//shorto shapekkhe student khujbo j 80 er upore paise -> filter
const goodStudent = student.filter(student => student.marks > 80);
// console.log(goodStudent);

//first student take chai j 80 er upore paise -> find
const firstGoodStudent = student.find(student => student.marks > 80);
console.log(firstGoodStudent);