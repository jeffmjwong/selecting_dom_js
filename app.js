const myHeading = document.getElementsByTagName('h1')[0];
const myButton1 = document.getElementById('myButton1');
const myButton2 = document.getElementById('myButton2');
const myTextInput = document.getElementById('myTextInput');
const myList = document.getElementsByTagName('li');
const errorNotPurple = document.getElementsByClassName('error-not-purple');


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
