const number = [1,2,3,4,5,6,7,8,9];
for(const num of number){
    // console.log(num)
}


const employee ={
    name : 'Shehab',
    designation:'QA',
    salary: 20000,
    experience: 1

}

//here use forIn loop for object 

for(const key in employee){
    const value = employee[key];
    // console.log(key+': '+value);
}

//another way
const keys = Object.keys(employee);
console.log(keys);
for(const key of keys){
    const value = employee[key];
    console.log(value);
}