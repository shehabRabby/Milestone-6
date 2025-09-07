const student = {
    name: 'Ashik',
    1:70,
    marks: 90,
    family: {
        title:'Bhuiya',
        member: 8,
        // mother : {
        //     name : 'Anisha begum',
        //     age : 33
        // }
    }
}

//dot notation
const studentName = student.name;
//bracket notation
const studentOne = student['1'];
// console.log(studentOne);
console.log(student.family.mother?.name) // ? -> ei properties jodi object er moddhe na thake tahole setake dur korte ? use hoy  