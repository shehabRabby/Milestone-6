function add(s, p) {
  console.log(arguments); //not array it is array like of object
  console.log(...arguments);
}
add(2, 3, 31, 44);
