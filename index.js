console.log("hi");
const object = {
  name: "Baz",
  age: 23,
};

console.log(object);

function greet(name) {
  console.log(`Hello ${name}`);
}

greet(object.name)

function renderSomeHTML() {
  let newHTML = '';
  const html = `
  <div>
  <button onclick="
  addItems()
  renderSomeHTMl()
  ">Add</button>
  </div>
  `
  document.querySelector('.container').innerHTML += html
}

renderSomeHTML()