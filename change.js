function generateRandomNumber() {
  const randomNumber = Math.random();
  console.log(randomNumber);
}

generateRandomNumber();
console.log("change2");

let firstName = "Trevor";
let surname = "Kwagala";
let name = surname + " " + firstName;
console.log(name);

const objectFile = {
  name: "Kwagala Trevor",
  age: 23,
};

const array = ["Trevor", 23];

let { first, age } = array;

// console.log(array.first);

["apples", "oranges", "grapes"].forEach((value, index) => {
  console.log(value, index);
});

console.log("Some new changes here");
