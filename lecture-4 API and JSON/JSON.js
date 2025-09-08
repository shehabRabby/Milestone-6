

console.log("Explore API");

const person = {
  name: "celim",
  food: "Dalim",
  dish: "Halim",
  friends: ["colim", "talim", "bolim"],
  isRich: true,
  money: 34000,
};

console.log(person);
// JSON - > JS object with Notation
//stringify typeof = string
//parse typeof = object

const personJSON = JSON.stringify(person);
console.log(personJSON);

const parseJSON = JSON.parse(personJSON);
console.log(parseJSON);
