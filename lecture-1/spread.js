//spread  ...name


const num = [44,33,67,89,2,22]
console.log(num)
console.log(...num)
//eita nite parbe na karon array
// const max = Math.max(num)
// console.log(max);

//eita nite parbe karon eta number
// const max = Math.max(...num)
// console.log(max);


//copy array and change

//etay prblem hbe karon first second 2 ta tei 6 add hobe
// const first = [1,2,6,11,2,34];
// const second = first;
// second.push(6);
// console.log(first)


//etay plb hobe na karon sudhu second tay 6 add hobe
// const first = [1,2,6,11,2,34];
// const second = [...first];
// const third = [889,123,...second,22,33,656]
// second.push(6);
// console.log(first)


//object keo korte pari
const person = {
    name :'ashik',age: 24
}
const employee = {
    designation : 'developer',
    ...person
}
console.log(employee)