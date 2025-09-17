const getData = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log("Generated num is : ", num);
  if (num > 1) {
    resolve({ num: num });
  } else {
    reject({ err: "Data is not available" });
  }
});


getData.then(data => console.log(data))
.catch(error => console.log(error))