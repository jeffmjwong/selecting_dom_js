const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput')


myButton.addEventListener('click', () => {
  const inputValue = myTextInput.value;
  myHeading.style.color = inputValue;
});
