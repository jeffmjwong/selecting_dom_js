const myHeading = document.getElementsByTagName('h1')[0];
const myButton1 = document.getElementById('myButton1');
const myButton2 = document.getElementById('myButton2');
const myButton3 = document.getElementById('myButton3');
const myTextInput = document.getElementById('myTextInput');
const myList = document.getElementsByTagName('li');
const errorNotPurple = document.querySelectorAll('.error-not-purple');
const evens = document.querySelectorAll('li:nth-child(even)');


// myButton.addEventListener('click', () => {
//   const inputValue = myTextInput.value;
//   myHeading.style.color = inputValue;
// });

myButton1.addEventListener('click', () => {
  Array.from(myList).forEach(element => {
    element.style.color = "red";
  });
});

myButton2.addEventListener('click', () => {
  Array.from(errorNotPurple).forEach(element => {
    element.style.color = "orange";
  });
});

myButton3.addEventListener('click', () => {
  Array.from(evens).forEach(element => {
    element.style.color = "blue";
  });
});
