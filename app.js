const myHeading = document.getElementsByTagName('h1')[0];
const myButton0 = document.getElementById('myButton0');
const myButton1 = document.getElementById('myButton1');
const myButton2 = document.getElementById('myButton2');
const myButton3 = document.getElementById('myButton3');
const myTextInput = document.getElementById('myTextInput');
const myTextInput0 = document.getElementById('myTextInput0');
const myList = document.getElementsByTagName('li');
const errorNotPurple = document.querySelectorAll('.error-not-purple');
const evens = document.querySelectorAll('li:nth-child(even)');


myButton0.addEventListener('click', () => {
  const inputValue = myTextInput0.value;
  myHeading.style.color = inputValue;
});

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
