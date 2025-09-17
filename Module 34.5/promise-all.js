const getData1 = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log("Generated num1 is : ", num);
  if (num > 1) {
    resolve({ num1: num });
  } else {
    reject({ err: "Data is not available 1" });
  }
});

const getData2 = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log("Generated num2 is : ", num);
  if (num > 1) {
    resolve({ num1: num });
  } else {
    reject({ err: "Data is not available 2" });
  }
});

const getData3 = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log("Generated num3 is : ", num);
  if (num > 1) {
    resolve({ num1: num });
  } else {
    reject({ err: "Data is not available 3" });
  }
});


Promise.all([getData1,getData2,getData3])
.then(res => console.log(res))
.catch(error => console.log(error))