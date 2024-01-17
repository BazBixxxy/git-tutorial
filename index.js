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

function renderSomeHTML() {
  let newHTML = "";
  const html = `
  <div>
  <button onclick="
  addItems()
  renderSomeHTMl()
  ">Add</button>
  </div>
  `;
  document.querySelector(".container").innerHTML += html;
}

renderSomeHTML();

const numbers = [1, -8, 4, -6, 7, 8, 9];
numbers.filter((value, index) => {
  if (value > 0) {
    return value;
  }
});
