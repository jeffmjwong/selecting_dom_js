const headingElement = document.getElementById('myHeading');

const changeColor = () => headingElement.style.color = "blue";

headingElement.addEventListener('click', changeColor);
