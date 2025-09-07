// make double 
const number = [2,3,45,67];
const double = []
for(const num of number){
    const res = num*2;
    double.push(res);
}

// console.log(double);

// Use map& call back function
const doubleIt = x => x*2;
// const doubles = number.map(doubleIt)  // doubleIt is a callback function
const doubles = number.map(x => x*2); // another way this is more short
// console.log(doubles);



const friends = ['xaved', 'sabel', 'kotbel'];
const nameLength = friends.map(name => name.length);
const firstCharacter = friends.map(name => name[0]);
const uperCase = friends.map(name => name.toUpperCase());

console.log(nameLength);
console.log(firstCharacter);
console.log(uperCase);

