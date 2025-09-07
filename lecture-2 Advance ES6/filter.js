const number = [2, 3, 23, 11, 45, 60];
//10 er choto value gula deo
//filter logic er upore kaj kore
const graterThan10 = number.filter((x) => x > 10);
// console.log(graterThan10);

//find -> shorto fulfuill korbe then first element ta diye dibe not full array or full staing
const num = [1, 3, 4, 22, 11, 45, 6, 34];
const firstEven = num.find((x) => x % 2 == 0);
console.log(firstEven);