console.log("hi");
const object = {
  name: "Baz",
  age: 23,
};

console.log(object);

function greet(name) {
  console.log(`Hello ${name}`);
}

greet(object.name);
console.log("Change1");

function moreChangesHere() {
  console.log("changes, changes, changes");
}

moreChangesHere();
