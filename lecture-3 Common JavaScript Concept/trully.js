let data;
data = 0;
data = 1;
data = "";
data = " ";
data = true;
data = null;
data = {};
data = [];
data = false;
console.log("Value of data", data);

if (data) {
  console.log("value of data truthy");
} else {
  console.log("value of data falsy");
}

//use logical not
if (!data) {
  console.log("inside if with a falsy value");
}

//capture all positive value boolean
if (!!data === true) {
  console.log("Only true inside the double not");
}
