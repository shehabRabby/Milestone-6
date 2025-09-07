const employee ={
    name : 'Shehab',
    designation:'QA',
    salary: 20000,
    experience: 1

}
const key = Object.keys(employee)
// console.log(key);
const values = Object.values(employee)
// console.log(values);
const entries = Object.entries(employee)
// console.log(entries)

//freeze -> eita korle kno properties k modify korte dibe na
Object.freeze(employee)
//seal -> eita modify korte dibe but add, delete korte dibe na
Object.seal(employee)

//Example delete or Remove properties
const client ={
    name : 'Raja Rani',
    designation:'QA',
    salary: 20000,
    experience: 1,
    age:22

}
//delete
delete client.experience
// console.log(client);

// update/change
client.salary = 50000;
// console.log(client)

// add new properties
client.location ='Dhaka';
// console.log(client);



