function multiply(x, y) {
  x += 5;
  y += 5;
  const mult = x * y;
  return mult;
}

const a = 5;
const b = 3;
// console.log('before function callig valu of a and b is :',a,b)
const result = multiply(a, b);
// console.log(result);
// console.log('After function callig valu of a and b is :',a,b)

//ekhane change korle original object er vitoreo  change hoye jabe
//Non Perimitive -> object,array
const manik = { name: "manik", balance: 1000 };
const panik = { name: "panik", balance: 10000 };
console.log("before call : ", manik, panik);

function totalMoney(p1, p2) {
  p1.balance = 0;
  p2.balance = p2.balance / 2;
  const total = p1.balance + p2.balance;
  return total;
}

const taka = totalMoney(manik, panik);
console.log("Balance :", taka);

console.log("After call : ", manik, panik);