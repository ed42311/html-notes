document.addEventListener('DOMContentLoaded', onLoadContent)

function onLoadContent() {
  // This button should get value from yay input
  // And when press we should add a new li to
  // our things list
  document
    .getElementById('yay-btn')
    .addEventListener('click', function () {
      let newItem = document.getElementById('yay-input').value;
      console.log("New list item", newItem);
    });

  // Add a listener to the input element with id yay-input
  // This listener should console.log the event
  document
    .getElementById('yay-input')
    .addEventListener('keyup', keyInputAddItem); 
}

function keyInputAddItem (event) {
  console.log("Keyup input: ", this.value);
}

// Object Constructor

let arr = [
  1,
  "Saddle the Horse",
  2,
  "Ride to Town",
  3,
  "Raise a Barn"
]

// Array for numbers
let numbers = []

// Array for strings
let content = []

// type check and sort
for (var i = 0; i < arr.length; i++) {
  if(typeof arr[i] === 'string') {
    content.push(arr[i])
  } else if (typeof arr[i] === 'number') {
    numbers.push(arr[i])
  }
}

// make sure it worked
console.log(content)

// Get my ul element off the page and store the DOM Node
// in this variable ->
var ulList = document.getElementById('things-list')

for (var i = 0; i < content.length; i++) {
  let listItem = document.createElement('li')
  listItem.textContent = content[i]
  ulList.append(listItem)
}
