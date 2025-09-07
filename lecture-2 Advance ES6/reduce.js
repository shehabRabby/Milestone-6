const number = [22, 1, 3, 66, 34];
let sum = 0;
for (const num of number) {
  sum += num;
}
// console.log(sum);
const total = number.reduce((acc, curr) => acc + curr, 0); //ekhane acc->sum r curr->num r 0-> initial value
console.log(total);
