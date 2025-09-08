if (true) {
  const num = 22;
//   console.log("This is if block : ", num);
  doMath(11, 23); //weasting
}

for (const num of [1, 24, 3, 6]) {
//   console.log(num);
}

//function scope or local scope
function doMath(a, b) {
  console.log(a, b);
  const sum = a + b;
  const total = sum + 10;
  function doubleIt(x) {
    return x * 2;
  }
  console.log(doubleIt(2));
}

//global scope
const name = "Thomsh Jhon";
